import React, { Component } from 'react'
import NotefulForm from '../NotefulForm/NotefulForm'
import './AddFolder.css'

export default class AddFolder extends Component {
  render() {
    return (
      <section className='AddFolder'>
        <h2>Create a Playlist</h2>
        <NotefulForm>
          <div className='field'>
            <label htmlFor='folder-name-input'>
              Name
            </label>
            <input type='text' id='folder-name-input' />
          </div>
          <div className='buttons'>
            <button type='submit'>
              Add Playlist
            </button>
          </div>
        </NotefulForm>
      </section>
    )
  }
}
