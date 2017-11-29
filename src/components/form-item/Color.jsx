import React from 'react';
import { observer } from 'mobx-react';
// import PropTypes from 'prop-types'
import _ from 'lodash';
import { CompactPicker } from 'react-color';
import item from './hoc/item';

@item()
@observer
class ColorPicker extends React.Component {

  handleChange = (color) => {
    this.props.onChange({}, {
      path: this.props.path,
      value: color.hex,
    });
  }

  render() {
    return (
      <CompactPicker
        {...this.props.itemProps}
        {..._.pick(this.props, ['value'])}
        onChange={this.handleChange}
      />
    );
  }
}

export default ColorPicker;
