import { Component } from 'react'
import PropTypes from 'prop-types'

export default class SearchField extends Component {
   static defaultProps = {
      with_text: '',
      onUpdate: null,
   }

   static propTypes = {
      with_text: PropTypes.string,
      onUpdate: PropTypes.func,
   }

   state = {
      with_text: this.props.with_text,
      changed: false,
   }

   constructor(props) {
      super(props)

      this.onChange = this.onChange.bind(this)
      this.onBlur = this.onBlur.bind(this)
   }

   fireUpdate = () => {
      let tokens = this.state.with_text.replace(/\++/g, " +").split(/\s+/)
      let filtered = tokens.filter((t) => { return ! t.match(/^[\s+]*$/) })

      if (this.timeout) {
         clearTimeout(this.timeout)
      }

      this.state.changed = false
      this.props.onUpdate(filtered)
   }

   onBlur = () => {
      if (this.state.changed) {
         this.fireUpdate()
      }
   }

   onChange = (e) => {
      let state = { with_text: e.target.value, changed: true }

      if (this.timeout) {
         clearTimeout(this.timeout)
      }
      this.timeout = setInterval(this.fireUpdate.bind(this), 1500)

      this.setState(state)
   }

   componentWillReceiveProps = (nextProps) => {
      this.setState({with_text: nextProps.with_text, changed: false})
   }

   onKeyPress = (e) => {
      if (e.key === "Enter") {
         e.preventDefault()
         this.fireUpdate()
      }
   }

   render = () => {
      console.log(this.props)
      console.log(this.state)

      return (
         <div className='row'>
            <div className='input-field col s12'>
               <i className='material-icons prefix'>youtube_searched_for</i>
               <input
                  type='search'
                  id='with_text'
                  name='with_text'
                  placeholder='Что ищем?'
                  value={this.state.with_text}
                  onBlur={this.onBlur}
                  onChange={this.onChange}
                  onKeyPress={this.onKeyPress} />
            </div>
         </div>)}}
