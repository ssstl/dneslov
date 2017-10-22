import { Component } from 'react'
import { lory } from 'lory.js'

export default class IconLoryModal extends Component {
   static defaultProps = {
      links: [],
      onLorySlideFrom: null,
   }

   componentLoaded = () => {
      this.modal = $(this.$modal).modal()
      this.lory = lory(this.$lory, {
         slideSpeed: 750,
         ease: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
         rewind: true,
         // infinite = 1
      })
   }

   loryResize = () => {
      this.items_width = [...this.$modal.querySelectorAll('li')].reduce((width, li) => {
         return width + li.clientWidth + parseInt(getComputedStyle(li).marginRight)
      }, 0)

      this.lory_scroll = this.items_width > this.$modal.clientWidth
      if (this.lory_scroll) {
         this.$lory.querySelector('.prev').classList.remove('hidden')
         this.$lory.querySelector('.next').classList.remove('hidden')
      } else {
         this.$lory.querySelector('.prev').classList.add('hidden')
         this.$lory.querySelector('.next').classList.add('hidden')
      }
   }

   componentDidMount = () => {
      this.$lory.addEventListener('after.lory.init', this.loryResize.bind(this))
      this.$lory.addEventListener('on.lory.resize', this.loryResize.bind(this))
      this.$lory.addEventListener('before.lory.slide', this.props.onLorySlideFrom.bind(this))
      window.addEventListener('load', this.componentLoaded.bind(this))
      document.addEventListener('click', this.onDocumentClick.bind(this))
   }

   componentWillUnmount = () => {
      this.$lory.removeEventListener('before.lory.init', this.loryResize.bind(this))
      this.$lory.removeEventListener('on.lory.resize', this.loryResize.bind(this))
      this.$lory.removeEventListener('before.lory.slide', this.props.onLorySlideFrom.bind(this))
      document.removeEventListener('load', this.componentLoaded.bind(this))
      document.removeEventListener('click', this.onDocumentClick.bind(this))
   }

   openModal = (index) => {
      if (this.lory_scroll) {
         document.body.style.overflowY = 'hidden' // required to fix width of modal in proper value
         // TODO fix scroll to last (it is buggy)
         this.lory.slideTo(index, 0)
      }

      $(this.modal).modal('open')
   }

   onDocumentClick = (e) => {
      // TODO click to transparent area of the modal, get fired to the modal, not the 
      // page. Fix it then.
      if (! e.cancelBubble && this.isOpen() && ! e.target.closest('.modal')) {
         $(this.modal).modal('close')
      }
   }

   isOpen = () => {
      return this.$modal.classList.contains('open')
   }

   render = () => {
      return (
         <div
            className='modal'
            id='slider-modal'
            ref={$modal => this.$modal = $modal} >
            <div className='modal-content'>
               <div
                  className='lory_slider js_lory_slider'
                  ref={$lory => this.$lory = $lory} >
                  <div
                     onClick={this.onClick}
                     className='frame js_frame'>
                     <ul className='slides js_slides'>
                        {this.props.links.map((link) =>
                           <li
                              key={link.id} >
                              <img
                                 className='icon'
                                 src={link.url}
                                 alt={link.description} /></li>)}</ul></div>
                  <div className='js_prev prev waves-effect'>
                     <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 501.5 501.5">
                        <g>
                           <path
                              fill="#DEB3AA"
                              d="M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z" /></g></svg></div>
                  <div className='js_next next waves-effect'>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        viewBox="0 0 501.5 501.5">
                        <g>
                           <path
                              fill="#DEB3AA"
                              d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z" /></g></svg></div>
                  <a
                     className='modal-action modal-close waves-effect btn-flat pulse chip'
                     href="javascript:">
                        Закрыть</a></div></div></div>)}}