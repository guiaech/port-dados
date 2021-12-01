import React from 'react'
import './styles.css'

const Header = () => {
    return (
        <section className="header">
            <div className="header-background"></div>
            <img src="https://avatars.githubusercontent.com/u/83043492?v=4" alt="profile" className="picture" />
            <h1 className="name">Guilherme Andrade</h1>
            <h2 className="description">Full Stack</h2>
        </section>
    )
}

export default Header
