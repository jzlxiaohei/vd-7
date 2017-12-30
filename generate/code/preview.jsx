import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import { hoistStatics } from 'recompose';
import invariant from 'invariant';
import _ from 'lodash';


// this hoc is for design, prod should have another one
function widgetPreview(options) {
  const className = options.className;
  if (process.env.NODE_ENV !== 'production') {
    invariant(!!className, 'className is required');
    // invariant(!!options.style, "@Page(options): options.style is required, if no style, pls set { style: false}");
  }

  const hoc = (OriginComponent) => {
    class WidgetComponent extends React.Component {

      displayName = `WidgetComponent_${options.className}`

      // static propTypes = {
      //   model: PropTypes.object.isRequired,
      // }

      getClassName = () => {
        const otherProps = this.props.otherProps || {}
        return cns(options.className, 'vd7', {
          absolute: otherProps.style && otherProps.style.position === 'absolute'
        });
      }

      getProps = () => {
        const otherProps = this.props.otherProps || {}
        otherProps.className = this.getClassName();
        return {
          otherProps,
          attr: this.props.attr || {},
        };
      }

      render() {
        const props = this.getProps();
        return (
          <OriginComponent
            childNodes={this.props.children}
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

export default widgetPreview;

