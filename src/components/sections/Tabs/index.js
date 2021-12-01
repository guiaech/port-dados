import React, { useState } from 'react'
import Posts from '../Posts/index'
import '../Posts/index'
import './styles.css'


const Tabs = () => {
    const [ button, setButton ] = useState(2)
    const buttonHandler0 = () => {
        setButton(0)
    }
    const buttonHandler1 = () => {
        setButton(1)
    }
    const buttonHandler2 = () => {
        setButton(2)
    }
    return (
        <>
            <nav className="tabs">
                <button className="tab" onClick={buttonHandler2}>{`👨‍💻 Portfólio`}</button>
                <button className="tab" onClick={buttonHandler0}>{`🎓 Certificados`}</button>
                <button className="tab" onClick={buttonHandler1}>{`📚 Livros Favoritos`}</button>
            </nav>
            <Posts number={button}/>
        </>
        
    )
}

export default Tabs
