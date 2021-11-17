import React from 'react'

function Tile ({title, paragraph, image, image_name}) {
    return (
        <section>
            <h2>{title}</h2>
            <p>{paragraph}</p>
            <img src={image} alt={image_name}/>
        </section>
    )
}

export default Tile;