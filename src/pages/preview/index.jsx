import React from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';
import { applySnapshot, applyPatch } from 'mobx-state-tree';
import registerTable from 'globals/registerTable';
import _ from 'lodash';

@observer
class PreviewPage extends React.Component {

  constructor(props) {
    super(props);
    this.mainContainer = registerTable.create('container', 'mainContainer');
  }

  setSelectedModel = action((newSelectedModel) => {
    window.parent.postMessage({
      type: 'selectModel',
      content: {
        id: newSelectedModel.id,
      }
    }, '*');
  })


  componentDidMount() {
    window.onmessage = e => {
      if(e.data) {
        const data = _.isString(e.data) ? JSON.parse(e.data) : e.data;
        const { type, content } = data;
        if(type === 'snapshot') {
          applySnapshot(this.mainContainer, content);
        }
        if(type === 'patch') {
          applyPatch(this.mainContainer, content);
        }
      }
    }
  }

  render() {
    const Container = registerTable.getPreview('container');
    return (
      <div className="preview-page">
        <Container
          model={this.mainContainer}
          registerTable={registerTable}
          setSelectedModel={this.setSelectedModel}
        />
      </div>
    )
  }
}

export default PreviewPage;
