import React, { Component } from 'react'
import DefaultNavbar from '../assets/layout/DefaultNavbar'
import { Card } from 'flowbite-react'

class ComponentsPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      copiedText: null
    }
    this.copyToClipboard = this.copyToClipboard.bind(this)
  }

  copyToClipboard (text) {
    navigator.clipboard.writeText(text).then(() => {
      this.setState({ copiedText: text }, () => {
        setTimeout(() => this.setState({ copiedText: null }), 2000)
      })
    }).catch(err => {
      console.error('Error al copiar el código: ', err)
    })
  }

  render () {
    return (
      <main>
        <DefaultNavbar />
        <div className='justify-center flex'>
          <Card href='#' className='max-w-5xl pointer-events-none'>
            <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima perspiciatis perferendis excepturi expedita a consectetur laborum quae sunt. Quisquam dignissimos fuga fugiat maxime et modi consequuntur dolores voluptatem natus dolor?
            </h5>
            <p className='font-normal text-gray-700 dark:text-gray-400'>
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
          </Card>
        </div>
      </main>
    )
  }
}

export default ComponentsPage
