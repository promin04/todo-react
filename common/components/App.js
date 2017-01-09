import React from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite'
import Todoapp from './Todo'

const App = () =>
  (
    <div className='App'>
      <Helmet title='React Production Starter' titleTemplate='%s - React Production Starter' />
      <h1 className={css(styles.title)}>Todo App</h1>
      <Todoapp />
    </div>
  )



const styles = StyleSheet.create({
  root: {
    maxWidth: 700,
    color: '#000',
    margin: '2rem auto',
    padding: '0 1rem'
  },
  title: {
    color: '#000',
    maxWidth: 300,
    fontWeight: 'bold',
    fontSize: 56,
    margin: 'auto',
    textAlign:'center'
  },
  footer: {
    margin: '4rem auto',
    textAlign: 'center',
    color: '#b7b7b7'
  },
  footerLink: {
    display: 'inline-block',
    color: '#000',
    textDecoration: 'none'
  }
})
export default connect()(App)
