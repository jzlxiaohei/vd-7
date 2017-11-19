import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import './index.less';

@observer
class EditLayout extends React.Component {

  static propTypes = {
    model: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="comps-edit-layout">

      </div>
    )
  }
}

export default EditLayout;
