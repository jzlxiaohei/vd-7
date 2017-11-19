import React from 'react';
import { observer } from 'mobx-react';
import { getSnapshot } from 'mobx-state-tree';
import { Button } from 'semantic-ui-react'
import WidgetBase from 'widgets/Base';
import './index.less';

@observer
class DesignPage extends React.Component {

  constructor(props) {
    super(props);
    this.base = WidgetBase.createDefaultInstance({
      id: '1',
      viewType: 'button',
    });
    const base2 = WidgetBase.createDefaultInstance({
      id: '1',
      viewType: 'button',
      style:{ width: 100 },
    });
    this.base.push(base2);
    setTimeout(() => {
      this.base.assignStyle({
        width: 100,
      })
      this.base.setSelected(false);
      const snapshot = getSnapshot(this.base);
      console.log(snapshot);
    }, 1000)
  }


  render() {
    return (
      <div className="design-page">
        {JSON.stringify(this.base.selected)}
        <Button primary>click</Button>
      </div>
    )
  }
}

export default DesignPage;
