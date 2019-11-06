import * as React from 'react';

interface IProps {
    btnText: string;
    hollow: boolean;
    typeAlert: string;
    typeInfo: string;
    small: boolean;
}

export class Alerts extends React.Component<IProps> {
	constructor(props) {
    super(props)
    
    this.state = {
      close: false,
      open: true
    }
    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
  }

  close() {
    this.setState({
      close: true,
      open: false
    })

  }

  open() {
  	this.setState({
      close: false,
      open: true
    })
  }

  render() {
  	let classesAlert = []
    let classesInfoBtn = []

    this.props.hollow ? classesAlert.push('sd-alert--hollow') : null
    this.props.small ? classesAlert.push('sd-alert--small') : null
    this.props.typeAlert ? classesAlert.push('sd-alert--' + this.props.typeAlert) : null
    this.props.typeInfo ? classesInfoBtn.push('sd-alert__info-btn--' + this.props.typeInfo) : null
    this.state.close ?	classesAlert.push('sd-alert--hidden') : null
    this.state.open ?  classesInfoBtn.push('sd-alert__info-btn--hidden') : null
    

 
    return (
      <div className = 'sd-alert__container'>
        <div className = {'sd-alert ' + classesAlert.join(' ')}>
          <button className = 'sd-alert__close' onClick = {this.close} > {this.props.btnText}</button>
        </div>
        <span className = {'sd-alert__info-btn sd-shadow--z2 ' + classesInfoBtn.join(' ')} onClick = {this.open}>
          <i className = 'info-icon-large'></i>
          test2
         </span>
      </div>
     );
  }
}
