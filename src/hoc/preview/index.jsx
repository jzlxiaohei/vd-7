import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { getSnapshot } from 'mobx-state-tree';
import cns from 'classnames';
import { hoistStatics } from 'recompose';
import invariant from 'invariant';
import _ from 'lodash';

const noChildStyle = {
  height: '100px',
  lineHeight: '100px',
  color: '#f50',
  textAlign: 'center',
};

// this hoc is for design, prod should have another one
function widgetDesign(options) {
  const className = options.className;
  if (process.env.NODE_ENV !== 'production') {
    invariant(!!className, 'className is required');
    // invariant(!!options.style, "@Page(options): options.style is required, if no style, pls set { style: false}");
  }

  const hoc = (OriginComponent) => {
    @observer
    class WidgetComponent extends React.Component {

      displayName = `WidgetComponent_${options.className}`

      static propTypes = {
        model: PropTypes.object.isRequired,
        setCurrentSelectedModel: PropTypes.func,
        registerTable: PropTypes.object.isRequired,
      }

      getClassName = () => {
        return cns(options.className, 'v7_design-view-edit', {
          selected: this.props.model.selected,
        });
      }

      getProps = () => {
        const { model } = this.props;
        const otherProps = _.omit(this.props, [
          'model', 'setCurrentSelectedModel',
          'onClick', 'registerTable',
        ]);
        otherProps.className = this.getClassName();
        otherProps.id = model.id;
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
            setCurrentSelectedModel={this.props.setCurrentSelectedModel}
            registerTable={this.props.registerTable}
          />
        );
      }

      handleClick = () => {

      }


      render() {
        const props = this.getProps();
        let childDoms = null;
        if (!this.props.model.ignoreRenderChildren) {
          childDoms = (this.props.model.isContainer && props.modelChildren.length ?
            props.modelChildren.map(child => this.renderChild(child))
            : [<div style={noChildStyle}>选中容器后，从右侧面板里添加子组件</div>]
          );
        }
        return (
          <OriginComponent
            childNodes={childDoms}
            {...props}
          />
        );
      }
    }

    WidgetComponent.WrappedComponent = OriginComponent;
    WidgetComponent.$options = options;
    return WidgetComponent;
  };

  return hoistStatics(hoc);
}

export default widgetDesign;

