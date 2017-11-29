import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types'
import { Card, Icon, Accordion } from 'semantic-ui-react';
import './edit.less';

@observer
class ContainerEdit extends React.Component {

  static propTypes = {
    model: PropTypes.object.isRequired,
    registerTable: PropTypes.object.isRequired,
  }

  state = {
    accordionStates: {}
  }

  renderAddChild() {
    const viewTypes = this.props.registerTable.getAllViewTypes();
    return (
      <Card.Group itemsPerRow={4}>
        {
          viewTypes.map(v => {
            return (
              <Card key={v} raised>
                <div>{v}</div>
                <Icon name="plus" />
              </Card>
            );
          })
        }
      </Card.Group>
    )
  }

  handleAccordionClick = (key) => {
    const accordionStates = this.state.accordionStates;
    const value = accordionStates[key];
    accordionStates[key] = !value;
    this.setState({ accordionStates })
  }

  render() {
    return (
      <div className="container-edit">
        <Accordion styled fluid>
            <Accordion.Title
              active={this.state.accordionStates['addChildren']}
              onClick={() => this.handleAccordionClick('addChildren')}
            >
              Add Children
            </Accordion.Title>
            <Accordion.Content active={this.state.accordionStates['addChildren']}>
              {this.renderAddChild()}
            </Accordion.Content>

            {/* <Accordion.Title
              active={this.state.accordionStates['editChildren']}
              onClick={() => this.handleAccordionClick('editChildren')}
            >
              Edit Children
            </Accordion.Title>
            <Accordion.Content active={this.state.accordionStates['editChildren']}>
              {this.renderChildren()}
            </Accordion.Content> */}
        </Accordion>
      </div>
    );
  }
}

export default ContainerEdit;
