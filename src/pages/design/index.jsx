import React from 'react';
import { observer } from 'mobx-react';
import { extendObservable } from 'mobx';
// import { onSnapshot, onPatch } from 'mobx-state-tree';
import WidgetButton from 'widgets/Button';
import registerTable from 'globals/registerTable';
import './index.less';


@observer
class DesignPage extends React.Component {

  constructor(props) {
    super(props);
    this.mainContainer = registerTable.create('container');
    this.initMockData();
    extendObservable(this, {
      selectedModel: this.mainContainer,
    });
  }

  initMockData() {
    this.button = registerTable.create('button');
    this.mainContainer.push(this.button);
    // onPatch(this.mainContainer, (e) => {
    //   console.log(e);
    // })
  }

  render() {
    return (
      <div className="design-page">
        <WidgetButton.Edit model={this.button} />
      </div>
    )
  }
}

export default DesignPage;
