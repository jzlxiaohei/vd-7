import React from 'react';
import { observer } from 'mobx-react';
import { extendObservable, action } from 'mobx';
import { getSnapshot, onPatch } from 'mobx-state-tree';
import Iframe from 'react-iframe';
import _ from 'lodash';
import registerTable from 'globals/registerTable';
import EditTemplate from 'comps/edit-template';
import TreeView from './TreeView';
import './index.less';

function findModelById(root, id) {
  if(root.id === id) {
    return root;
  }
  for(let i=0; i < root.children.length; i++){
    const item = root.children[i];
    const foundOne = findModelById(item, id)
    if (foundOne) {
      return foundOne;
    }
  }

  return null;
}

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
    window.onmessage = e => {
      if(e.data) {
        const data = _.isString(e.data) ? JSON.parse(e.data) : e.data;
        const { type, content } = data;
        if(type === 'selectModel') {
          const model = findModelById(this.mainContainer, content.id);
          this.setSelectedModel(model);
        }
      }
    }
  }


  initMockData() {
    this.mainContainer.push(registerTable.create('button'));
    const innerContainer = registerTable.create('container');
    const swipe = registerTable.create('swipe')
    this.mainContainer.push(innerContainer);
    this.mainContainer.push(swipe);
    swipe.push(registerTable.create('button'));
    swipe.push(registerTable.create('button'));
    innerContainer.push(registerTable.create('button'));
    innerContainer.push(registerTable.create('button'));
  }

  renderEditPanel() {
    const currentModel = this.selectedModel;
    const viewType = currentModel.viewType;
    const EditComp = registerTable.getEdit(viewType) || EditTemplate;
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
