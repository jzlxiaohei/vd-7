import React from 'react';
import PropTypes from 'prop-types';
import preview from 'hoc/preview';
import './style.less';

@preview({
  className: 'v7_picture'
})
class ContainerPreview extends React.Component {
  static propTypes = {
    attr: PropTypes.object.isRequired,
    otherProps: PropTypes.object.isRequired // className, id, style, onClick等事件
  };

  render() {
    const props = this.props;
    const { attr } = props;
    const link = attr.link;
    const imgDom = <img src={attr.url} alt="img err" draggable="false" />;

    return (
      <div {...props.otherProps}>
        {link ? (
          <a href={attr.link} draggable="false">
            {imgDom}
          </a>
        ) : (
          imgDom
        )}
      </div>
    );
  }
}

export default ContainerPreview;
