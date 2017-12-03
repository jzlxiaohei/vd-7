import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types'
import { Card } from 'semantic-ui-react';
import './style.less';

@observer
class EditAddChildren extends React.Component {

  static propTypes = {
    model: PropTypes.object.isRequired,
    registerTable: PropTypes.object.isRequired,
  }

  handleAddChild = (viewType) => {
    const childModel = this.props.registerTable.create(viewType);
    this.props.model.push(childModel);
  }

  render() {
    const viewTypes = this.props.registerTable.getAllViewTypes();
    return (
      <Card.Group className="comp-add-children" itemsPerRow={4}>
        {
          viewTypes.map(v => {
            return (
              <Card
                className="child-view-type-card"
                key={v} raised
                onClick={() => this.handleAddChild(v)}
              >
                <div>{v}</div>
              </Card>
            );
          })
        }
      </Card.Group>
    )
  }
}

export default EditAddChildren;
