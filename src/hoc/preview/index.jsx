import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { getSnapshot, onAction } from 'mobx-state-tree';
import cns from 'classnames';
import { hoistStatics } from 'recompose';
import invariant from 'invariant';
import _ from 'lodash';
import './style.less';

const PreviewSpecialClassName= 'v7_preview-widget';

// this hoc is for design, prod should have another one
function widgetDesign(options) {
  const className = options.className;
  if (process.env.NODE_ENV !== 'production') {
    invariant(!!className, 'className is required');
    // invariant(!!options.style, "@Page(options): options.style is required, if no style, pls set { style: false}");
  }

  const hoc = (OriginComponent) => {
    class WidgetComponent extends React.Component {

      displayName = `WidgetComponent_${options.className}`

      static propTypes = {
        model: PropTypes.object.isRequired,
        setSelectedModel: PropTypes.func.isRequired,
        registerTable: PropTypes.object.isRequired,
      }

      state = {
        domHeight: 0,
        dragging: false,
        width: 0,
        height: 0,
        top:0, left: 0,
        type: '' // '2a' or 'a2'
      }

      componentDidMount() {
        const model = this.props.model;
        this.disposeActon = onAction(model, call => {
          if (call.name === 'assignAttr' && call.path === '') {
            // const oldValue = model.attr.get('draggable');
            const newValue = call.args[0].draggable;
            if (newValue === true) {
              const rect = this.designDom.getBoundingClientRect();
              const { height, top, left, width }= rect;
              this.setState({
                dragging: true,
                domHeight: height,
                domWidth: width,
                height: height,
                width: width,
                top,
                left,
                type: '2a',
              });
              const parentRect = model.getParent().$designDom.getBoundingClientRect();
              model.assignStyle({
                position: 'absolute',
                top: top - parentRect.top,
                left: left - parentRect.left,
              })
              // this.dragHandler = document.createElement('div');
              // this.dragHandler.classList.add('drag-handler');
              // this.designDom.appendChild(this.dragHandler);
            } else {
              model.assignStyle({
                position: '$d',
                top: '$d',
                left: '$d',
              })
              const rect = this.designDom.getBoundingClientRect();
              const { height, top, left, width } = rect;
              this.setState({
                dragging: true,
                domHeight: height,
                domWidth: width,
                height: 0,
                width: 0,
                top,
                left,
                type: 'a2',
              });
            }
          }
        })
      }

      componentWillUnmount() {
        this.disposeActon && this.disposeActon();
      }

      getClassName = () => {
        return cns(options.className, PreviewSpecialClassName, {
          selected: this.props.model.selected,
          vd7: true,
          absolute: this.props.model.style.get('position') === 'absolute'
        });
      }

      getProps = () => {
        const { model } = this.props;
        const otherProps = _.omit(this.props, [
          'model', 'setSelectedModel',
          'onClick', 'registerTable',
        ]);
        otherProps.className = this.getClassName();
        if(model.attr.id) {
          otherProps.id = model.attr.id;
        }
        otherProps.style = getSnapshot(model.style);
        otherProps.onClick = this.handleClick;
        return {
          otherProps,
          attr: getSnapshot(model.attr),
          modelChildren: model.children,
          // modelChildren: toJS(model.children),
        };
      }

      renderChild(childModel) {
        const ShowWidget = this.props.registerTable.getPreview(childModel.viewType);
        return (
          <ShowWidget
            key={childModel.id}
            model={childModel}
            setSelectedModel={this.props.setSelectedModel}
            registerTable={this.props.registerTable}
          />
        );
      }

      handleClick = (e) => {
        const currentDom = e.currentTarget;
        if (currentDom.classList.contains(PreviewSpecialClassName)) {
          if (!e.nativeEvent.$view7_childSelected
            || this.props.model.takeOverChildrenEditor
          ) {
            this.props.setSelectedModel(this.props.model);
            // eslint-disable-next-line no-param-reassign
            e.nativeEvent.$view7_childSelected = true;
          }
        }
      }

      renderDragging() {
        const style = {
          width: this.state.width,
          height: this.state.height,
        }
        setTimeout(() => {
          if (this.state.type === '2a') {
            this.setState({
              width: 0,
              height: 0,
              type: '',
            })
          }
          if (this.state.type === 'a2') {
            this.setState({
              width: this.state.domWidth,
              height: this.state.domHeight,
              type: '',
            })
          }
        }, 0)
        setTimeout(() => {
          this.setState({
            dragging: false,
          })
        }, 500)
        return (
          <div
            className="_widget_placeholder"
            style={style}>
          </div>
        )
      }

      render() {
        if (this.state.dragging) {
          return this.renderDragging();
        }
        const props = this.getProps();
        let childDoms;
        if (!this.props.model.ignoreRenderChildren
          && this.props.model.isContainer && props.modelChildren.length
        ) {
          childDoms = props.modelChildren.map(child => this.renderChild(child));
        }
        return (
          <OriginComponent
            ref={
              dom => {
                const realDom = ReactDOM.findDOMNode(dom);
                this.props.model.$designDom = realDom;
                this.designDom = realDom;
              }
            }
            childNodes={childDoms}
            {...props}
          />
        );
      }
    }

    WidgetComponent.WrappedComponent = OriginComponent;
    WidgetComponent.$options = options;
    return observer(WidgetComponent);
  };

  return hoistStatics(hoc);
}

export default widgetDesign;

