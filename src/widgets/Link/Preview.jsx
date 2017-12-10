import React from 'react';
import PropTypes from 'prop-types';
import preview from 'hoc/preview';
import style from './style.less';

@preview({
  className: 'v7_link',
  style,
})
class ContainerPreview extends React.Component {

  static propTypes = {
    attr: PropTypes.object.isRequired,
    otherProps: PropTypes.object.isRequired, // className, id, style, onClick等事件
  }


  // TODO： how to fix so ugly code
  handleClick = (e) => {
    e.preventDefault();
    if(this.props.otherProps.onClick) this.props.otherProps.onClick(e);
  }

  render() {
    const props = this.props;
    const attr = props.attr;
    return (
      <a
        {...props.otherProps}
        href={attr.link}
        onClick={this.handleClick}
      >
        {attr.text || props.childNodes}
      </a>
    );
  }
}

export default ContainerPreview;
