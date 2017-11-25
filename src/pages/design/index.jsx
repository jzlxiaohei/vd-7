import React from 'react';
import { observer } from 'mobx-react';
import { extendObservable } from 'mobx';
import { getSnapshot, onPatch } from 'mobx-state-tree';
import Iframe from 'react-iframe';
import registerTable from 'globals/registerTable';
import TreeView from './TreeView';
import './index.less';


@observer
class DesignPage extends React.Component {

  constructor(props) {
    super(props);
    this.mainContainer = registerTable.create('container', 'mainContainer');
    extendObservable(this, {
      selectedModel: this.mainContainer,
    });
  }

  componentDidMount() {
    this.initMockData();
    const iframe = document.getElementById('preview_page');
    iframe.onload = () => {
      const snapshot = {
        ...getSnapshot(this.mainContainer),
        $isSnapshot: true,
      }
      iframe.contentWindow.postMessage(snapshot, '*');
    }
    onPatch(this.mainContainer, e => {
      iframe.contentWindow.postMessage(JSON.stringify(e), '*');
    });
  }


  initMockData() {
    // this.button = registerTable.create('button');
    this.mainContainer.push(registerTable.create('button'));
    const innerContainer = registerTable.create('container');
    this.mainContainer
      .push(innerContainer);
    innerContainer.push(registerTable.create('button'));
    innerContainer.push(registerTable.create('button'));
  }


  render() {
    return (
      <div className="design-page" id="design-page">
        <div style={{ height: 400 }}>
          <TreeView treeRoot={this.mainContainer} />
        </div>
        <div>
        <Iframe url="/preview"
          width="375px"
          height="450px"
          id="preview_page"
          display="initial"
          position="relative"
          allowFullScreen/>
        </div>
      </div>
    )
  }
}

export default DesignPage;
