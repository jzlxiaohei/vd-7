import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { Icon, Accordion, Card } from 'semantic-ui-react';
import AddChildren from './comps/add-children';
import PropertyEditor from './comps/property-editor';
import './index.less';


export {
  AddChildren,
  PropertyEditor,
}

const AccTypes = {
  editProperty: 'editProperty',
  addChildren: 'addChildren',
}

@observer
class EditTemplate extends React.Component {

  static propTypes = {
    model: PropTypes.object.isRequired,
    registerTable: PropTypes.object.isRequired,
    extraChildren: PropTypes.arrayOf({
      title: PropTypes.node,
      children: PropTypes.node,
    })
  }

  getExtraKey = (index) => {
    return `extra-${index}`;
  }

  state = {
    accordionStates: {
      [AccTypes.editProperty]: true,
    }
  }

  handleAccordionClick = (key) => {
    const accordionStates = this.state.accordionStates;
    const value = accordionStates[key];
    accordionStates[key] = !value;
    this.setState({ accordionStates })
  }

  render() {
    const model = this.props.model;

    return (
      <div className="comps-edit-layout">
        <Card fluid>
          <Card.Content>
            <Card.Header className="edit-card-header">
              {model.viewType}
            </Card.Header>
          </Card.Content>
            {this.renderContent()}
        </Card>
      </div>
    )
  }

  renderAccordionItem(key, title, children) {
    return [
      <Accordion.Title
        key="title"
        active={this.state.accordionStates[key]}
        onClick={() => this.handleAccordionClick(key)}
      >
        <Icon name='dropdown' />
        {title}
      </Accordion.Title>,
      <Accordion.Content
        active={this.state.accordionStates[key]}
        key="content"
      >
        {children}
      </Accordion.Content>
    ];
  }


  renderExtra() {
    const extraChildren = this.props.extraChildren;
    if(!extraChildren || !extraChildren.length) {
      return null;
    }
    return extraChildren.map(
      (ch, index) => {
        const key = this.getExtraKey(index);
        return this.renderAccordionItem(key, ch.title, ch.children);
      }
    )
  }

  renderContent() {
    const model = this.props.model;
    return (
      <Card.Content extra>
        <Accordion>
          {
            this.renderAccordionItem(
              AccTypes.editProperty,
              'Property',
              <PropertyEditor {...this.props} />
            )
          }
          {this.renderExtra()}
          {
            model.isContainer ?
              this.renderAccordionItem(
                AccTypes.addChildren,
                'Add Children (click to add)',
                <AddChildren {...this.props} />
              ) : null
          }
        </Accordion>
      </Card.Content>
    )
  }
}

export default EditTemplate;
