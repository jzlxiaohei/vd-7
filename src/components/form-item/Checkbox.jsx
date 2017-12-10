import React from 'react';
import item from './hoc/item';
import { Checkbox } from 'semantic-ui-react';
// import _ from 'lodash';

@item()
class AutoInput extends React.PureComponent {


  handleChange = (e, data) => {
    this.props.onChange({}, {
      path: this.props.path,
      value: data.checked,
    });
  }

  render() {
    return (
      <Checkbox
        {...this.props.itemProps}
        checked={this.props.value}
        onChange={this.handleChange}
      />
    )
  }
}

export default AutoInput;
