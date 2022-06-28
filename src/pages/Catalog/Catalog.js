import React, { useEffect, useState } from "react"
import * as ApiTmbService from '../../services/apiTmdb'


function Catalog() {
    const [popularMovies, setPopularMovies] = useState([])

    const imgUrl = 'https://image.tmdb.org/t/p/w300'

    useEffect(() => {
        ApiTmbService.getPopular()
            .then((response) => setPopularMovies(response.results))
    }, [])
    return <>
        <h2>Catalogo</h2>
        <div className="categoria">
            <h3 className="categoria-titulo">Populares</h3>
            <div className="categoria-lista">
                {
                    popularMovies.map((popularMovie) => {
                        return <>
                            <img src={imgUrl + popularMovie.poster_path} alt={popularMovie.title} />
                        </>
                    })
                }
            </div>
        </div>
    </>
}

export default Catalog