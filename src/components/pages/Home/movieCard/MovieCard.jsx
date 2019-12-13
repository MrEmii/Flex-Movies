import React, { Component } from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom'

class MovieCard extends Component {

    constructor() {
        super();
    }

    render() {
        const {
            title, id, stars, description
        } = this.props
        return (
            <div className="MovieCardWrapper">
                <div className="movie">
                    <Link to={"/" + id}></Link>
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fkiminonawa%2Fimages%2F6%2F62%2FKimi-no-Na-wa.-Visual.jpg%2Frevision%2Flatest%3Fcb%3D20160927170951&f=1&nofb=1" alt="" />
                    <h2>{title}</h2>
                    <h3>{description}</h3>
                </div>
            </div>
        );
    }
}

export default MovieCard;
