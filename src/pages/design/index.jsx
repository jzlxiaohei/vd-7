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
    const iframe = document.getElementById('preview-iframe-page');
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
      return <EditComp model={currentModel} registerTable={registerTable} />;
    }
    return null; // TODO: default edit;
  }

  render() {
    return (
      <div className="design-page" id="design-page">
        <div className="tree-view-area">
          <TreeView
            treeRoot={this.mainContainer}
            setSelectedModel={this.setSelectedModel}
          />
        </div>
        <div className="edit-area">
          {this.renderEditPanel()}
        </div>
        <div className="preview-area">
          <Iframe
            url="/preview.html/preview"
            width="375px"
            height="667px"
            id="preview-iframe-page"
            display="initial"
            position="relative"
          />
        </div>
      </div>
    )
  }
}

export default DesignPage;
