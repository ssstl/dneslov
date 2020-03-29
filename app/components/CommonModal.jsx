import { Component } from 'react'
import PropTypes from 'prop-types'
import { mixin } from 'lodash-decorators'

import SubmitButton from 'SubmitButton'

export default class CommonModal extends Component {
   static defaultProps = {
      id: null,
      remoteName: null,
      remoteNames: null,
      form: null,
      data: null,
      validations: {},
      i18n: null,
   }

   static propTypes = {
      remoteName: PropTypes.string.isRequired,
      remoteNames: PropTypes.string.isRequired,
      validations: PropTypes.object,
      form: PropTypes.object.isRequired,
      data: PropTypes.object.isRequired,
      i18n: PropTypes.object.isRequired,
   }

   //system
   constructor() {
      super()

      this.onCloseClick = this.onCloseClick.bind(this)
   }

   componentDidMount() {
      document.addEventListener('dneslov-record-stored', this.onCloseClick)

      this.modal = M.Modal.init(this.$modal, {
         onCloseEnd: this.onModalClosed.bind(this)
      })

      this.componentDidRender()
   }

   componentWillUnmount() {
      document.removeEventListener('dneslov-record-stored', this.onCloseClick)

      this.modal.destroy()
   }

    componentDidUpdate() {
      this.componentDidRender()
   }

   // custom
   componentDidRender() {
      if (this.props.data) {
         this.modal.open()
      }
   }

   onCloseClick() {
      this.modal.close()
   }

   onModalClosed() {
      let ce = new CustomEvent('dneslov-modal-close', {})

      document.dispatchEvent(ce)
   }

   render() {
      console.log(this.props)

      return (
         <div className='enrighten'>
            <div
               key='calendary-form-modal'
               className='form-modal modal modal-fixed-footer z-depth-2'
               ref={e => this.$modal = e}
               id='calendary-form-modal'>
               <div className='modal-content'>
                  <this.props.form {...this.props.data} /></div>
               <div className="modal-footer">
                  <div className="row">
                     <div className="col xl12 l12 m12 s12">
                        <div className="row">
                              <button
                                 key='close-button'
                                 type='button'
                                 className='btn close'
                                 onClick={this.onCloseClick.bind(this)} >
                                 {this.props.i18n.close}</button>
                              <SubmitButton
                                 title={this.props.data.id &&
                                        this.props.i18n.update ||
                                        this.props.i18n.create } /></div></div></div></div></div></div>)
   }
}
