import { Component } from 'react/lib/React'
import Input from 'react-materialize/src/Input'

export default class CalendaryFormTextPart extends Component {
   static defaultProps = {
      author_name: '',
      date: '',
      council: '',
   }

   constructor(props) {
      super(props)
      this.onChange = this.onChange.bind(this)

      this.state = {
         author_name: this.props.author_name,
         date: this.props.date,
         council: this.props.council
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

   render = () => {
      return (
         <div className='row'>
            <Input
               type='text'
               id='author_name'
               ref='author_name'
               name='author_name'
               divClassName='validate input-field col l6 s6'
               labelClassName='active'
               label='Автор'
               placeholder='Введи имя автора(ов)'
               value={this.state.author_name}
               onChange={this.onChange} />
            <Input
               type='text'
               id='date'
               ref='date'
               name='date'
               divClassName='validate input-field col l3 s3'
               labelClassName='active'
               label='Дата'
               placeholder='Введи дату(-ы) создания'
               value={this.state.date}
               onChange={this.onChange} />
            <Input
               type='text'
               id='council'
               ref='council'
               name='council'
               divClassName='validate input-field col l3 s3'
               labelClassName='active'
               label='Собор'
               placeholder='Введи код собора'
               value={this.state.council}
               onChange={this.onChange} />
         </div>)}}