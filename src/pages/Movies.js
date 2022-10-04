import { Box, Select, Center } from "native-base"
import React, { useState, useEffect } from 'react'
import { getContent } from "../handler/api"
import MovieMenu from "../menu/MovieMenu"

export function Movies() {
    const [selectedMovieType, setSelectedMovieType] = useState("popular")
    const [movieData, setMovieData] = useState([])

    const fetchMovies = async () => {
        try {
            const data = await getContent("movie", selectedMovieType)
            setMovieData(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [selectedMovieType])

    return (
        <Center>
            <MovieMenu selectedMovieType={selectedMovieType} setSelectedMovieType={setSelectedMovieType} />
        </Center>
    )
}