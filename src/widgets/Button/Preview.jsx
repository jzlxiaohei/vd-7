import React from 'react';
import PropTypes from 'prop-types';
import preview from 'hoc/preview';
import style from './index.less';

@preview({
  className: 'v5_button',
  style,
})
class Button extends React.Component {

  static propTypes = {
    attr: PropTypes.object.isRequired,
    otherProps: PropTypes.object.isRequired, // className, id, style, onClick等事件
  }

  render() {
    const props = this.props;
    return (
      <div
        {...props.otherProps}
      >
        {props.attr.text}
      </div>
    );
  }
}

export default Button;
