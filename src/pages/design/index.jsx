import React from 'react';
import { observer } from 'mobx-react';
import { extendObservable, action } from 'mobx';
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
    this.setSelectedModel(this.mainContainer);
  }

  setSelectedModel = action((newSelectedModel) => {
    if (this.selectedModel) {
      this.selectedModel.setSelected(false);
    }
    newSelectedModel.setSelected(true);
    this.selectedModel = newSelectedModel;
  })

  componentDidMount() {
    this.initMockData();
    const iframe = document.getElementById('preview_page');
    iframe.onload = () => {
      const data = {
        type: 'snapshot',
        content: getSnapshot(this.mainContainer),
      }
      iframe.contentWindow.postMessage(data, '*');
    }
    onPatch(this.mainContainer, e => {
      iframe.contentWindow.postMessage({
        type: 'patch',
        content: e,
      }, '*');
    });
  }


  initMockData() {
    this.mainContainer.push(registerTable.create('button'));
    const innerContainer = registerTable.create('container');
    this.mainContainer
      .push(innerContainer);
    innerContainer.push(registerTable.create('button'));
    innerContainer.push(registerTable.create('button'));
  }

  renderEditPanel() {
    const currentModel = this.selectedModel;
    const viewType = currentModel.viewType;
    const EditComp = registerTable.getEdit(viewType);
    if (EditComp) {
      return <EditComp model={currentModel}/>;
    }
    return null; // TODO: default edit;
  }

  render() {
    return (
      <div className="design-page" id="design-page">
        <div style={{ height: 400 }}>
          <TreeView
            treeRoot={this.mainContainer}
            setSelectedModel={this.setSelectedModel}
          />
        </div>
        <div>
        {this.renderEditPanel()}
        <Iframe url="/preview.html/preview"
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
