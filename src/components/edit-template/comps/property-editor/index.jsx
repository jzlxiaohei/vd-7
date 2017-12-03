import React from 'react';
import { observer, PropTypes as mPropTypes } from 'mobx-react';
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react';
// import _ from 'lodash';
import { FormInput, FormColor } from 'comps/form-item';
import './style.less';

const FormTypeMap = {
  color: FormColor,
  default: FormInput,
}

@observer
class TableKvEditor extends React.Component {

  static propTypes = {
    model: PropTypes.shape({
      attr: mPropTypes.observableMap,
      style: mPropTypes.observableMap,
      attrConfig: PropTypes.object,
      styleConfig: PropTypes.object,
    }).isRequired,
    keyTitle: PropTypes.string,
    valueTitle: PropTypes.string,
    hideHeader: PropTypes.bool,
    getValue: PropTypes.func,
  }

  static defaultProps = {
    keyTitle: 'key',
    valueTitle: 'value',
    getValue: function(model, path) {
      return model.get(path);
    },
  }

  renderHeader() {
    if (this.props.hideHeader) {
      return null;
    }
    const { keyTitle, valueTitle } = this.props;
    return (
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>{keyTitle}</Table.HeaderCell>
          <Table.HeaderCell>{valueTitle}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    )
  }

  getFormComp(type) {
    const FormItem = FormTypeMap[type] || FormTypeMap['default'];
    return FormItem;
  }

  handleCellValueChange = (data, methodName) => {
    this.props.model[methodName]({
      [data.path]: data.value,
    })
  }

  renderRows(property, config, methodName) {
    return property.keys().map(key => {
      const configItem = config[key] || {};
      const title = configItem.title || key;
      const FormItem = this.getFormComp(configItem.type);
      return (
        <Table.Row className="table-edit-row" key={key}>
          <Table.Cell className="key-col">{title}</Table.Cell>
          <Table.Cell className="val-col">
            <FormItem
              model={property}
              path={key}
              getValue={(model, path) => model.get(path)}
              onChange={(data) => this.handleCellValueChange(data, methodName)}
            />
          </Table.Cell>
        </Table.Row>
      )
    })
  }

  render() {
    const { attr, attrConfig, style, styleConfig } = this.props.model;
    return (
      <div className="comp-property-editor">
        <Table celled collapsing basic='very'>
          <Table.Body>
            {this.renderRows(attr, attrConfig, 'assignAttr')}
            {this.renderRows(style, styleConfig, 'assignStyle')}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default TableKvEditor;
