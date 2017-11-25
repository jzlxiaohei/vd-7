import React from 'react';
import PropTypes from 'prop-types';
import preview from 'hoc/preview';

@preview({
  className: 'v7_container',
  style: false,
})
class ContainerPreview extends React.Component {

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
        {props.childNodes}
      </div>
    );
  }
}

export default ContainerPreview;
