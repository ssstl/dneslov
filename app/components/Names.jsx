import { Component } from 'react'
import ReactScrollPagination from 'react-scroll-pagination/src/index'
import * as Axios from 'axios'

import SearchField from 'SearchField'
import NameModal from 'NameModal'
import NameRow from 'NameRow'

export default class Names extends Component {
   static defaultProps = {
      names: {
         list: [],
         page: 1,
         total: 0,
      },
      locales: [],
      tokens: [],
   }

   state = {
      names: this.props.names.list,
      page: this.props.names.page,
      total: this.props.names.total,
      appended: 0,
      query: {
         page: this.props.names.page,
         with_tokens: this.props.tokens,
      },
      current: null
   }

   // system
   componentWillMount() {
      console.log("MOUNT", this.props.names.list)
      if (this.props.names.list.length == 0) {
         this.submit()
      }
   }

   componentDidUpdate(nextProps) {
      this.isRequesting = false
   }

   // custom
   fetchNext() {
      if ((this.state.total > this.state.names.length) && ! this.isRequesting) {
         console.log("FETCH NEXT FOR", this.state)
         this.submit(this.state.page + 1)
      }
   }

   onNameUpdate(name) {
      let index = this.state.names.findIndex((c) => { return c.id == name.id })
      let names = this.state.names.slice()
      let total = this.state.total
      let appended = this.state.appended

      console.log(index)
      if (index < 0) {
         names.unshift(name)
         total += 1
         appended += 1
      } else {
         names[index] = name
      }

      this.setState({
         names: names,
         total: total,
         current: null,
         appended: appended})
   }

   onNameEdit(id) {
      let name = this.state.names.find((m) => { return m.id == id })
      this.setState({current: name})
   }

   onNameClose() {
      this.setState({current: null})
   }

   onNameRemove(id) {
      let name = this.state.names.find((c) => { return c.id == id })
      let request = {
         url: '/names/' + name.id + '.json',
         method: 'delete'
      }

      Axios(request).then(this.onSuccessRemove.bind(this))
   }

   onSuccessRemove(response) {
      let name = response.data, names = this.state.names.slice()
      let index = names.findIndex((c) => { return c.id == name.id })

      delete names[index]
      this.setState({
         names: names.filter((c) => {return c}),
         total: this.state.total - 1
      })
   }

   onSuccessLoad(response) {
      let new_names, names = response.data

      console.log("SUCCESS", names)
      if (names.page > 1) {
         new_names = this.state.names.slice()
         if (this.state.appended) {
            let ids = new_names.map((c) => { return c.id })
            names.list.forEach((c) => {
               if (ids.indexOf(c.id) < 0) {
                  new_names.push(c)
               }
            })
         } else {
            new_names = new_names.concat(names.list)
         }
      } else {
         new_names = names.list
      }

      this.setState({names: new_names,
                     page: names.page,
                     total: names.total})
      console.log("state", this.state)
   }

   submit(page = 1) {
      let request = {
         url: '/names.json',
      }

      this.isRequesting = true
      this.state.query.page = page

      console.log("Sending...", this.state.query)

      Axios.get(request.url, { params: this.state.query })
           .then(this.onSuccessLoad.bind(this))
   }

   onSearchUpdate(tokens) {
      this.state.query.with_tokens = tokens

      this.submit(1)
   }

   render() {
      console.log(this.props)
      console.log(this.state)

      return (
         <div className='names list'>
            <div className="row">
               <form>
                  <div className="col xl3 l3 m8 s12">
                     <h4
                        className='title'>
                        Имена</h4></div>
                  <SearchField
                     wrapperClassName='col xl7 l7 m7 s8'
                     with_text={this.state.query.with_tokens.join(" ")}
                     onUpdate={this.onSearchUpdate.bind(this)} /></form>
                  <div className="col xl2 l2 m2 s4 flex">
                     <NameModal
                        open={!!this.state.current}
                        {...this.state.current}
                        ref={e => this.$form = e}
                        onCloseModal={this.onNameClose.bind(this)}
                        onUpdateRecord={this.onNameUpdate.bind(this)} /></div></div>
            <hr />
            <table className='striped responsive-table'>
               <thead>
                  <tr>
                     <th>Написание</th>
                     <th>Язык</th>
                     <th>Азбука</th>
                     <th>Связка</th>
                     <th>Связано с...</th>
                     <th>Корневое имя</th>
                     <th><i className='tiny material-icons'>near_me</i></th></tr></thead>
               <tbody>
                  {this.state.names.map((name) =>
                     <NameRow
                        key={"name-" + name.id}
                        locales={this.props.locales}
                        {...name}
                        onEdit={this.onNameEdit.bind(this)}
                        onRemove={this.onNameRemove.bind(this)} />)}</tbody></table>
            <ReactScrollPagination
               fetchFunc={this.fetchNext.bind(this)} /></div>)}}
