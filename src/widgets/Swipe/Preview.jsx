import React from 'react';
import PropTypes from 'prop-types';
import preview from 'hoc/preview';
import Siema from './siema';
import './style.less';

class InnerComp extends React.Component {
  componentDidMount() {
    this.init();
  }

  init() {
    this.siema = new Siema({
      selector: this.containerRef
    });
  }

  destroy() {
    if (this.siema) {
      this.siema.destroy();
      this.siema = undefined;
      this.containerRef = undefined;
    }
  }

  componentWillUnmount() {
    this.destroy();
  }

  render() {
    return (
      <div className="slick-container" ref={el => (this.containerRef = el)}>
        {this.props.childNodes.map((ch, index) => (
          <div className="slick-item" key={index}>
            {ch}
          </div>
        ))}
      </div>
    );
  }
}

@preview({
  className: 'v7_swipe'
})
class SwipePreview extends React.Component {
  static propTypes = {
    attr: PropTypes.object.isRequired,
    otherProps: PropTypes.object.isRequired, // className, id, style, onClick等事件
    childNodes: PropTypes.array.isRequired
  };

  static defaultProps = {
    childNodes: []
  };

  render() {
    const props = this.props;
    const childNodes = props.childNodes;
    return (
      <div {...props.otherProps}>
        <div>
          <InnerComp key={childNodes.length} childNodes={childNodes} />
        </div>
      </div>
    );
  }
}

export default SwipePreview;
