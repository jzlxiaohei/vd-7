import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { getSnapshot } from 'mobx-state-tree';
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

      getClassName = () => {
        return cns(options.className, PreviewSpecialClassName, {
          selected: this.props.model.selected,
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


      render() {
        const props = this.getProps();
        let childDoms = null;
        if (!this.props.model.ignoreRenderChildren
          && this.props.model.isContainer && props.modelChildren.length
        ) {
          childDoms = props.modelChildren.map(child => this.renderChild(child));
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
    return observer(WidgetComponent);
  };

  return hoistStatics(hoc);
}

export default widgetDesign;

