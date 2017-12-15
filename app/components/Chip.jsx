import { Component } from 'react'
import PropTypes from 'prop-types'

export default class Chip extends Component {
   static defaultProps = {
      className: null,
      url: '',
      text: '',
      data: null,
      color: null,
      action: null,
      onAct: null,
   }

   static propTypes = {
      className: PropTypes.string,
      url: PropTypes.string,
      text: PropTypes.string.isRequired,
      data: PropTypes.object,
      color: PropTypes.string,
      action: PropTypes.string,
      onAct: PropTypes.func,
   }

   state = {
      action: this.props.action
   }

   componentWillReceiveProps(nextProps) {
      if (nextProps.action !== this.state.action) {
         this.state.action = nextProps.action
      }
   }

   onAct(e) {
      e.stopPropagation()
      this.setState({ action: null })
      this.props.onAct(this.props.data)
   }

   className() {
      return 'chip ' + (this.props.className || '')
   }

   closeClassName() {
      return 'material-icons close ' + (this.state.action || '')
   }

   actionIcon() {
      return this.state.action == 'remove' && 'close' || this.state.action
   }

   actionRender() {
      let action = null

      if (this.state.action) {
         action = <i className={this.closeClassName()} onClick={this.onAct.bind(this)} >{this.actionIcon()}</i>
      }

      return action
   }

   textRender() {
      let text

      if (this.props.children) {
         text = this.props.children
      } else if (this.props.url) {
         text = <a href={this.props.url} target='_blank' >{this.props.text}</a>
      } else {
         text = <span>{this.props.text}</span>
      }

      return text
   }

   render() {
      return (
         <div
            className={this.className()}
            style={{ backgroundColor: '#' + this.props.color }} >
            {this.textRender()}
            {this.actionRender()}</div>)}}
