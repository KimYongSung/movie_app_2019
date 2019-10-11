import React from "react";
import PropTypes from "prop-types";

/**
 * Movie conponet
 * @param {id}    id 정보
 * @param {year}  개봉 년도
 * @param {title} 제목
 * @param {summary} 
 * @param {poster} poster url
 */
function Movie({id, year, title, summary, poster}){
    return <h4>{title}</h4>
}

Movie.prototype = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;