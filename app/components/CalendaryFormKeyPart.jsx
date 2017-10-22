import { Component } from 'react/lib/React'
import Input from 'react-materialize/src/Input'
import Button from 'react-materialize/src/Button'
import SlugField from 'SlugField'

export default class CalendaryFormKeyPart extends Component {
   static defaultProps = {
      slug: '',
      licit: false,
      language_code: '',
      alphabeth_code: '',
      onUpdate: null,
   }

   constructor(props) {
      super(props)
      this.onChange = this.onChange.bind(this)
      this.onCheck = this.onCheck.bind(this)

      this.state = {
         slug: this.props.slug,
         licit: this.props.licit,
         language_code: this.props.language_code,
         alphabeth_code: this.props.alphabeth_code,
      }
   }

   setStateKey = (key, value) => {
      var state = {}
      state[key] = value
      this.setState(state)
      this.props.onUpdate(key, value)
   }

   onChange = (e) => {
      this.setStateKey(e.target.name, e.target.value)
   }

   onCheck = (e) => {
      this.setStateKey(e.target.name, e.target.checked)
   }

   onChildUpdate = (key, value) => {
      this.state[key] = value
      this.props.onUpdate(key, value)
   }

   render = () => {
      return (
         <div className='row'>
            <SlugField
               slug={this.props.slug}
               onUpdate={this.onChildUpdate} />
            <Input
               type='select'
               id='language_code'
               name='language_code'
               divClassName='xl4 l4 m4 s12'
               label='Язык'
               value={this.state.language_code}
               onChange={this.onChange}
               children={['цс'].map((option) => <option value={option}>ЦС</option>)} />
            <Input
               type='select'
               id='alphabeth_code'
               name='alphabeth_code'
               onChange={this.onChange}
               divClassName='xl4 l4 m4 s12'
               label='Азбука'
               value={this.state.alphabeth_code}
               onChange={this.onChange}
               children={['цс', 'ру'].map((option) => <option value={option}>{option}</option>)} />
            <Input
               type='checkbox'
               id='licit'
               name='licit'
               divClassName='validate xl2 l2 m2 s6'
               label='Опубликовать'
               checked={this.state.licit}
               onChange={this.onCheck} />
         </div>)}}