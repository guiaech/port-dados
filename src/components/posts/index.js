import React from 'react'
import './styles.css'

const Post = (props) => {
    return (
        <a className="post" target="_blank" rel="noreferrer" href={props.link}>
            <img className="image" src={props.image} alt={props.title} />
            <h3 className="title">{props.title}</h3>
        </a>
    )
}

export default Post