import React from 'react';
import PropTypes from 'prop-types';
import preview from 'hoc/preview';

@preview({
  className: 'v7_container'
})
class ContainerPreview extends React.Component {
  static propTypes = {
    attr: PropTypes.object.isRequired,
    otherProps: PropTypes.object.isRequired // className, id, style, onClick等事件
  };

  render() {
    const props = this.props;
    let className = props.otherProps.className;
    if (props.attr.inline) {
      className += ' inline';
    }
    return (
      <div {...props.otherProps} className={className}>
        {props.childNodes}
      </div>
    );
  }
}

export default ContainerPreview;
