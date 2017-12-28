import React from 'react';
import PropTypes from 'prop-types';
import preview from 'hoc/preview';

@preview({
  className: 'v7_button',
})
class ButtonPreview extends React.Component {

  static propTypes = {
    attr: PropTypes.object.isRequired,
    otherProps: PropTypes.object.isRequired, // className, id, style, onClick等事件
    extra: PropTypes.node
  }

  render() {
    const props = this.props;
    return (
      <div
        {...props.otherProps}
      >
        {props.attr.text}
        {props.extra}
      </div>
    );
  }
}

export default ButtonPreview;
