import { Component } from 'react'
import PropTypes from 'prop-types'
import * as assign from 'assign-deep'
import * as uuid from 'uuid/v1'
import { mixin } from 'lodash-decorators'

import MemoryNameBlock from 'MemoryNameBlock'
import Validation from 'Validation'
import ErrorSpan from 'ErrorSpan'

@mixin(Validation)
export default class MemoryNamesCollection extends Component {
   static defaultProps = {
      name: null,
      key_name: null,
      value: {},
      title: null,
      action: null,
      single: null,
      placeholder: null,
      onUpdate: null,
      child_value_validations: {},
      child_validations: {},
      validations: {},
   }

   static propTypes = {
      name: PropTypes.string.isRequired,
      key_name: PropTypes.string,
      value: PropTypes.object.isRequired,
      title: PropTypes.string,
      action: PropTypes.string,
      child_validations: PropTypes.object.isRequired,
      validations: PropTypes.object.isRequired,
      onUpdate: PropTypes.func.isRequired,
   }

   // system
//   static getDerivedStateFromProps(props, state) {
//      console.log(this.props.value != nextProps.value, this.props.value, nextProps.value)
//      if (this.props.value != nextProps.value) {
//         this.state.value = nextProps.value
//         this.updateError(nextProps.value)
//      }
//   }

//   getSnapshotBeforeUpdate() {
//      this.updateError(this.state.value)
//   }

   // events
   onAddItem() {
      let key = uuid()
      let detail = { [this.props.name]: { [key]: { _id: key } } }
      let e = new CustomEvent('dneslov-update-path', { detail: detail })
      document.dispatchEvent(e)
   }

//   onAddItem() {
//      this.state.value[uuid()] = {}
//      this.updateError(this.state.value)
//      this.forceUpdate()
//   }
//
//   onChildUpdate(property) {
//      this.updateError(this.state.value)
////      this.props.onUpdate({[this.props.name]: property})
//   }
//
//   // proprties
//   getElementWith(key, element) {
//      return assign({_id: key, key: key}, element, this.props.value[key] || {})
//   }
//
//   asArray() {
//      let a = []
//      Object.entries(this.state.value).forEach(([key, element]) => {
//         a.push(this.getElementWith(key, element))
//      })
//
//      return a
//   }
//
   asArray() {
      return Object.entries(this.props.value).map(([key, element]) =>
         assign({}, element, {
            key: key,
            _id: this.props.name + '.' + key,
         })
      )
   }

   render() {
      console.log(this.asArray(), this.props)

      return (
         <div className='col xl12 l12 m12 s12'>
            <div className='row'>
               <h5>Имена</h5>
               <div id={this.props.name}>
                  {this.asArray().map(element =>
                     <MemoryNameBlock
                        {...element} />)}</div>
               <div className='row'>
                  <div className='col'>
                     <ErrorSpan
                        error={this.getErrorText(this.props.value)} /></div></div>
               <button
                  className='btn btn-primary'
                  onClick={this.onAddItem.bind(this)}
                  type='button'>
                  <i className='small material-icons'>add_to_photos</i>
                  Добавь имя</button></div></div>)
   }
}
