import { Component } from 'react'
import PropTypes from 'prop-types'

import MemoryForm from 'MemoryForm'
import SubmitButton from 'SubmitButton'
import ErrorSpan from 'ErrorSpan'

export default class MemoryModal extends Component {
   static defaultProps = {
      id: null,
      slug: {text: ''},
      short_name: '',
      base_year: 0,
      order: '',
      council: '',
      quantity: '',
      sight_id: 0,
      convers_to_id: 0,
      names: [],
      descriptions: [],
      wikies: [],
      beings: [],
      paterics: [],
      memory_names: [],
      events: [],
      open: false,
      onUpdateMemory: null,
      onCloseMemory: null,
   }

   static propTypes = {
      slug: PropTypes.string,
      onUpdateMemory: PropTypes.func.isRequired,
      onCloseMemory: PropTypes.func.isRequired,
   }

   state = this.getDefaultState()

   componentWillReceiveProps(nextProps) {
      this.setState(this.getDefaultState(nextProps))
   }

   getDefaultState(props = this.props) {
      console.log(props)
      return {
         id: props.id,
         slug: props.slug,
         order: props.order,
         council: props.council,
         quantity: props.quantity,
         sight_id: props.sight_id,
         covers_to_id: props.covers_to_id,
         descriptions: props.descriptions,
         wikies: props.wikies,
         beings: props.beings,
         paterics: props.paterics,
         memory_names: props.memory_names,
         events: props.events,
      }
   }

   getCleanState() {
      return {
         id: null,
         slug: {text: ''},
         order: '',
         short_name: '',
         base_year: 0,
         council: '',
         quantity: '',
         sight_id: 0,
         covers_to_id: 0,
         descriptions: [],
         wikies: [],
         beings: [],
         paterics: [],
         memory_names: [],
         events: [],
         open: false,
      }
   }

   componentDidMount() {
      this.modal = $(this.$modal).modal({
         complete: this.props.onCloseMemory.bind(this)
      })
   }

   componentDidUpdate() {
      this.$submit.setState({valid: this.$form.valid})

      if (this.props.open) {
         this.modal.modal('open')
      }
   }

   newMemory() {
      this.setState(this.getCleanState())
   }

   onSubmitSuccess(data) {
      console.log("SUCCESS", data)
      this.props.onUpdateMemory(data)
      this.modal.modal('close')
   }

   onSubmitError(response) {
      let error

      console.log("ERROR", response, this.state, this.$form.query)

      if (response.responseJSON) {
         let errors = []

         Object.entries(response.responseJSON).forEach(([key, value]) => {
            errors.push(value.map((e) => { return key + " " + e }))
         })

         error = errors.join(", ")
      } else {
         error = response.responseText
      }

      this.$error.setState({error: error})
   }

   onSubmit(e) {
      e.stopPropagation()
      e.preventDefault()

      let settings = {
         data: { memory: this.$form.serializedQuery() },
         dataType: 'JSON',
         error: this.onSubmitError.bind(this),
         success: this.onSubmitSuccess.bind(this),
      }

      if (settings.data.memory.id) {
         settings.data.slug = settings.data.memory.slug_attributes.text
         settings.method = 'PUT'
         settings.url = '/memories/' + settings.data.slug + '.json'
      } else {
         settings.method = 'POST'
         settings.url = '/memories.json'
      }

      console.log("STATE",this.state)
      console.log(settings)
      $.ajax(settings)
   }

   onFormUpdate() {
      console.log(this.$form.valid)
      this.$submit.setState({valid: this.$form.valid})
   }

   render() {
      console.log(this.state)

      return (
         <div className='enrighten'>
            <div className='row'>
               <a
                  className="waves-effect waves-light btn modal-trigger"
                  href="#memory-form-modal"
                  onClick={this.newMemory.bind(this)} >
                     Новая память</a></div>
            <div
               key='memory-form-modal'
               className='form-modal modal modal-fixed-footer z-depth-2'
               id='memory-form-modal'
               ref={e => this.$modal = e} >
               <form onSubmit={this.onSubmit.bind(this)}>
                  <div className='modal-content'>
                     <MemoryForm
                        ref={e => this.$form = e}
                        key={'form'}
                        {...this.state}
                        onUpdate={this.onFormUpdate.bind(this)} /></div>
                  <div className="modal-footer">
                     <div className="row">
                        <div className="col xl9 l8 m7 s6">
                           <ErrorSpan
                              ref={e => this.$error = e}
                              key={'error'} /></div>
                        <div className="col xl3 l4 m5 s6">
                           <SubmitButton
                              ref={e => this.$submit = e}
                              title={this.props.id && 'Обнови память' || 'Создай память'} /></div></div></div></form></div></div>)}}