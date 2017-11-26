import React from 'react'
import PropTypes from 'prop-types';
import { Button, Popup } from 'semantic-ui-react'
import './style.less';

class PopConfirm extends React.PureComponent {

  static propTypes = {
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    // trigger: PropTypes.node,
    // content: PropTypes.node,
  }

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  }

  handleOpen = () => {
    this.setState({
      open: true,
    })
    if(this.props.onOpen) {
      this.props.onOpen()
    }
  }

  handleClose = () => {
    this.setState({
      open: false,
    })
    if(this.props.onClose) {
      this.props.onClose()
    }
  }

  handleConfirm = () => {
    this.setState({
      open: false,
    })
    if (this.props.onConfirm) {
      this.props.onConfirm();
    }
  }

  renderContent() {
    return (
      <div>
        <div className="tips">
          are you sure?
        </div>
        <div className="actions">
          <Button size="tiny" className="cancel" onClick={this.handleClose}>
            cancel
          </Button>
          <Button size="tiny" primary className="confirm" onClick={this.handleConfirm}>
            yes
          </Button>
        </div>
      </div>
    )
  }

  render() {
    let className = 'comps-pop-confirm';
    if(this.props.className) {
      className += ` ${this.props.className}`
    }
    return (
      <Popup
        {...this.props}
        className={className}
        open={this.state.open}
        onOpen={this.handleOpen}
        onClose={this.handleClose}
        content={this.renderContent()}
      />
    )
  }
}

export default PopConfirm
