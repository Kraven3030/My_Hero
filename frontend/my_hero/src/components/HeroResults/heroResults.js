import React from 'react';
import { Link } from "react-router-dom";

function HeroResults({ id, thumbnail, name }) {

    return (
        <Link to={`/${id}`}>
            <div>
                <img src={thumbnail} alt="thumbnail" />
                <h1 className="">{name}</h1>
            </div>
        </Link>
    )
}
export default HeroResults;
