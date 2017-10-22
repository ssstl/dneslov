import { Component } from 'react/lib/React'
import Input from 'react-materialize/src/Input'

export default class TextField extends Component {
   static defaultProps = {
      idx: null,
      text: '',
      language_code: 'цс',
      alphabeth_code: 'цс',
      onUpdate: null,
   }

   constructor(props) {
      super(props)

      this.onChange = this.onChange.bind(this)
      this.state = {
         language_code: this.props.language_code,
         alphabeth_code: this.props.alphabeth_code,
         text: this.props.text,
      }
   }

   onChange = (e) => {
      let state = {}
      let key = e.target.name
      let value = e.target.value

      state[key] = value
      this.setState(state)
      this.props.onUpdate(this.props.idx, key, value)
   }

   render = () => {
      return (
         <div className='row'>
            <Input
               type='text'
               id='text'
               name='text'
               divClassName='validate input-field col l6 s6'
               labelClassName='active'
               label='Текст'
               placeholder='Введи текст'
               value={this.state.text}
               onChange={this.onChange} />
            <Input
               type='select'
               id='language_code'
               name='language_code'
               divClassName='l3 s3'
               label='Язык'
               value={this.state.language_code}
               onChange={this.onChange}
               children={['цс'].map((option) => <option value={option}>ЦС</option>)} />
            <Input
               type='select'
               id='alphabeth_code'
               name='alphabeth_code'
               onChange={this.onChange}
               divClassName='l3 s3'
               label='Азбука'
               value={this.state.alphabeth_code}
               onChange={this.onChange}
               children={['цс', 'ру'].map((option) => <option value={option}>{option}</option>)} />
         </div>)}}