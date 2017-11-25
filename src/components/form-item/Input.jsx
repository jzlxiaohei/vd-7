import React from 'react';
// import { observer } from 'mobx-react';
import item from './hoc/item';
import { Input } from 'semantic-ui-react';
import _ from 'lodash';

@item()
class AutoInput extends React.PureComponent {

  render() {
    return <Input {...this.props.itemProps} {..._.pick(this.props, ['onChange', 'value'])} />
  }
}

export default AutoInput;
