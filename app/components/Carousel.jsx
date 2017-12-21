import { Component } from 'react'

import IconLoryModal from 'IconLoryModal'

export default class Carousel extends Component {
   static defaultProps = {
      images: [],
   }

   state = { loadCounter: 0 }

   // system
   componentWillReceiveProps(nextProps) {
      this.setState({ loadCounter: 0 })
   }

   shouldComponentUpdate(nextProps, nextState) {
      return nextState.loadCounter == 0
   }

   componentDidMount() {
      if (this.$carousel) {
         this.$$carousel = $(this.$carousel)
      }
   }

   componentWillUnmount() {
      if (this.$carousel) {
         Array.from(this.$carousel.querySelectorAll('img')).forEach((img) => {
            img.removeEventListener('click', this.onIconClick.bind(this))
         })
      }
   }

   // events
   onIconClick(e) {
      if (e.target.className.match(/\bactive\b/)) {
         e.stopPropagation()
         let index = e.target.getAttribute('data-index')
         console.log("OPEN MODAL", e.target)
         this.$lory.openModal(index)
      }
   }

   onLorySlideFrom(e) {
      let index = parseInt(e.detail.nextSlide)

      if (index >= 0) {
         this.$$carousel.carousel('set', e.detail.nextSlide);
      }
   }

   stateChanged() {
      if (this.state.loadCounter == this.props.images.length) {
         console.log("CAROUSEL COMPLETED")
         this.$$carousel.carousel()
         Array.from(this.$carousel.querySelectorAll('img')).forEach((img) => {
            console.log("CAROUSEL", img)
            img.addEventListener('click', this.onIconClick.bind(this))
         })
      }
   }

   onImageCompleted(e) {
      this.setState((prevState) => { return { loadCounter: prevState.loadCounter + 1 }}, this.stateChanged.bind(this))
   }

   render() {
      console.log("CARU", this.props)

      return (
         <div className='col xl12 l12 m12 s12'>
            <div
               key='carousel'
               className='carousel compact'
               ref={e => this.$carousel = e} >
               {this.props.images.map((image) =>
                  <img
                     key={image.id}
                     className='carousel-item'
                     alt={image.description}
                     src={image.url}
                     data-index={image.id}
                     onLoad={this.onImageCompleted.bind(this)}
                     onError={this.onImageCompleted.bind(this)} />)}</div>
            <IconLoryModal
               key='lory'
               ref={e => this.$lory = e}
               onLorySlideFrom={this.onLorySlideFrom.bind(this)}
               links={this.props.images} /></div>)}}