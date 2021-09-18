import React from 'react'
import './App.css'
import Header from './components/sections/Header'
import Buttons from './components/sections/Buttons'
import Tabs from './components/sections/Tabs/index'

const App = () => {
    return (
        <main className="main">
            <Header />
            <Buttons />
            <Tabs />
        </main>
    )
}

export default App