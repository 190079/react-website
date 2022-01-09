import React from 'react'

import {Header,Footer,Blog,Possibility,Features,WhatGPT} from './containers';
import {Article,Brand,CTA,Feature,NavBar} from './components'

import './App.css'

const App = () => {
  return (
    <div className="App">
    <div className="App_bg">
      <NavBar />
      <Header />
    </div>
    <Brand />
    <WhatGPT />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
    </div>
  )
}

export default App
