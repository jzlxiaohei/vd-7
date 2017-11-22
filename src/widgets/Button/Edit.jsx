import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types'
import { Card } from 'semantic-ui-react'
import FormInput from 'comps/form-item/Input';

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

  render() {
    return (
      <Card>
        <Card.Content header='Button' />
        <Card.Content extra>
          <FormInput model={this.props.model.attr} path="text" onChange={this.handleAttrChange}/>
        </Card.Content>
      </Card>
    )
  }
}

export default ButtonEdit;
