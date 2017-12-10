import React from 'react';
import { observer } from 'mobx-react';
import { extendObservable, action } from 'mobx';
import registerTable from 'globals/registerTable';
import EditTemplate from 'comps/edit-template';
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
  }


  initMockData() {
    this.mainContainer.push(registerTable.create('button'));
    const innerContainer = registerTable.create('container');
    const swipe = registerTable.create('swipe')
    this.mainContainer.push(innerContainer);
    this.mainContainer.push(registerTable.create('picture'));
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
    return <EditComp model={currentModel} registerTable={registerTable} />;
  }

  render() {
    const Container = registerTable.getPreview('container');
    return (
      <div className="design-page" id="design-page">
        <div className="tree-view-area">
          <TreeView
            treeRoot={this.mainContainer}
            setSelectedModel={this.setSelectedModel}
          />
        </div>
        <div className="preview-area">
          <Container
            model={this.mainContainer}
            registerTable={registerTable}
            setSelectedModel={this.setSelectedModel}
          />
        </div>
        <div className="edit-area">
          {this.renderEditPanel()}
        </div>
      </div>
    )
  }
}

export default DesignPage;
