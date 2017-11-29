import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types'
import { Card } from 'semantic-ui-react'
import PropertyEditor from 'comps/property-editor';

@observer
class ButtonEdit extends React.Component {

  static propTypes = {
    model: PropTypes.object.isRequired,
  }

  handleAttrChange = (data) => {
    this.props.model.assignAttr({
      [data.path]: data.value,
    })
  }

  /*
    <FormInput
      model={this.props.model.attr}
      path="text"
      onChange={this.handleAttrChange}
      getValue={(model, path) => model.get(path)}
    />
   */



  render() {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header className="edit-card-header">
            Button
          </Card.Header>
        </Card.Content>
        <Card.Content extra>
          <PropertyEditor
            model={this.props.model}
            onChange={this.handleAttrCellValueChange}
            config={this.props.model.attrConfig}
          />
        </Card.Content>
      </Card>
    )
  }
}

export default ButtonEdit;
