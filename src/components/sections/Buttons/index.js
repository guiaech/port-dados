import React from 'react'
import './styles.css'

const Buttons = () => {
    return (
        <section className="buttons">
            <div className="float">
                <a className="link" target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5562981126525&text=Ol%C3%A1%20Tudo%20bem%3F">
                    <img src="https://gobeyond.vercel.app/static/media/whatsapp.4a8733ff.svg" alt="whatsapp" className="icon" />
                    <span className="text">Whatsapp</span>
                </a>
                <a className="link" target="_blank" rel="noreferrer" href="https://github.com/guiaech">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" className="icon" />
                    <span className="text">GitHub</span>
                </a>
                <a className="link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/guilherme-andrade-e-chaves/">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="linkedin" className="icon" />
                    <span className="text">Linkedin</span>
                </a>
            </div>
        </section>
    )
}

export default Buttons
