import { Component } from 'react/lib/React'
import Button from 'react-materialize/src/Button'
import NamesFormBlock from 'NamesFormBlock'
import DescriptionsFormBlock from 'DescriptionsFormBlock'
import CalendaryFormKeyPart from 'CalendaryFormKeyPart'
import CalendaryFormTextPart from 'CalendaryFormTextPart'
import SlugField from 'SlugField'

export default class CalendaryForm extends Component {
   static defaultProps = {
      licit: false,
      slug: '',
      language_code: '',
      alphabeth_code: '',
      author_name: '',
      date: '',
      council: '',
      names: [],
      descriptions: [],
      wikies: [],
      links: [],
   }

   constructor(props) {
      super(props)
      this.onSubmit = this.onSubmit.bind(this)
      this.onChildUpdate = this.onChildUpdate.bind(this)

      this.setDefaultState()
   }

   setDefaultState = () => {
      this.state = {
         slug: this.props.slug,
         licit: this.props.licit,
         language_code: this.props.language_code,
         alphabeth_code: this.props.alphabeth_code,
         author_name: this.props.author_name,
         date: this.props.date,
         council: this.props.council,
      }
   }

   notvalid = () => {
      false // TODO
   }

   filteredState = () => {
      //TODO automatize
      let state = this.state

      state['slug_attributes'] = state['slug']
      state['names_attributes'] = state['names']
      state['descriptions_attributes'] = state['descriptions']
      delete state['slug']
      delete state['names']
      delete state['descriptions']

      console.log(state)
      return state
   }

   onSubmit = (e) => {
      let data = { calendary: this.filteredState() }
      let _this = this

      e.preventDefault()
      $.post('', data, (data) => {
         _this.setDefaultState()
      }, 'JSON')
   }

   onChildUpdate = (key, value) => {
      this.state[key] = value
      console.log(this.state)
   }

   render = () => {
      return (
         <div className='row'>
            <form className='col s12' onSubmit={this.onSubmit}>
               <CalendaryFormKeyPart
                  licit={this.props.licit}
                  language_code={this.props.language_code}
                  alphabeth_code={this.props.alphabeth_code}
                  onUpdate={this.onChildUpdate} />
               <div className='row'>
                  <div className='col l12 s12'>
                     <NamesFormBlock
                        names={this.props.names}
                        onUpdate={this.onChildUpdate} />
                  </div>
               </div>
               <div className='row'>
                  <div className='col l12 s12'>
                     <DescriptionsFormBlock
                        descriptions={this.props.descriptions}
                        onUpdate={this.onChildUpdate} />
                  </div>
               </div>
               <CalendaryFormTextPart
                  author_name={this.props.author_name}
                  date={this.props.date}
                  council={this.props.council}
                  onUpdate={this.onChildUpdate} />
               <Button
                  type='submit'
                  className='btn btn-primary'
                  disabled={this.notvalid()}
                  children='Создай календарь' />
            </form>
         </div>)}}
