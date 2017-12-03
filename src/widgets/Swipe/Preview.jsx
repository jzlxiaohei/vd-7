import React from 'react';
import PropTypes from 'prop-types';
import preview from 'hoc/preview';
// import ReactSwipe from 'react-swipe';
import Siema from './siema';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.less';

class InnerComp extends React.Component {

  componentDidMount() {
    this.init();
  }

  init() {
    this.siema = new Siema({
      selector: this.containerRef,
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
    this.destroy()
  }

  render() {
    return (
      <div
        className="slick-container"
        ref={el => this.containerRef=el}
      >
        {
          (this.props.childNodes).map((ch, index) => <div className="slick-item" key={index}>{ch}</div>)
        }
      </div>
    );
  }
}

@preview({
  className: 'v7_swipe',
  style: false,
})
class SwipePreview extends React.Component {

  static propTypes = {
    attr: PropTypes.object.isRequired,
    otherProps: PropTypes.object.isRequired, // className, id, style, onClick等事件
    childNodes: PropTypes.array.isRequired,
  }

  static defaultProps = {
    childNodes: [],
  }

  // componentDidUpdate(prevProps) {
  //   if(this.props.childNodes.length !== prevProps.childNodes.length) {
  //     this.destroy();
  //     this.init();
  //   }
  // }


  render() {
    const props = this.props;
    const childNodes = props.childNodes;
    return (
      <div {...props.otherProps}>
        <InnerComp key={childNodes.length} childNodes={childNodes} />
      </div>
    );
  }
}

export default SwipePreview;
