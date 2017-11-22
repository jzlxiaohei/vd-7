import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { hoistStatics } from 'recompose';
import _ from 'lodash';

export default function formItemHoc(options) {
  function hoc(OriginComponent) {
    @observer
    class FormItem extends React.Component {
      static propTypes = {
        model: PropTypes.object.isRequired,
        path: PropTypes.string,
        onChange: PropTypes.func,
      }


      onChange = (e, data) => {
        const { model, path, onChange } = this.props;
        if(onChange) {
          onChange({
            ...data,
            model,
            path,
          });
        } else {
          _.set(model, path, data.value);
        }
      }

      render() {
        const { model, path } = this.props;
        const value = _.get(model, path);
        const props = {
          model,
          path,
          onChange: this.onChange,
          value
        }
        return <OriginComponent {...props}/>
      }
    }
    return FormItem;
  }

  return hoistStatics(hoc);
}

