import React from 'react';
import { observer } from 'mobx-react';
import { extendObservable } from 'mobx';
import WidgetButton from 'widgets/Button';
import WidgetContainer from 'widgets/Container';
import './index.less';


@observer
class DesignPage extends React.Component {

  constructor(props) {
    super(props);
    this.mainContainer = WidgetContainer.create('1');
    this.button = WidgetButton.create('2');
    extendObservable(this, {
      selectedModel: this.mainContainer,
    });
  }


  handleAttrChange = (data) => {
    console.log(data);
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
