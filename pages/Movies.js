import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { getMovies } from "../handler/api"
import { MovieMenu } from '../components/MovieMenu'

export function Movies() {
    const [selectedMovieType, setSelectedMovieType] = useState("")
    const [movieData, setMovieData] = useState([])

    const fetchMovies = async () => {
        try {
            const data = await getMovies(selectedMovieType)
            setMovieData(data)
        } catch (error) {
            console.log(error)
        }
    }
    console.log(movieData)

    return (
        <View>
            <MovieMenu setSelectedMovieType={setSelectedMovieType} selectedMovieType={selectedMovieType} fetchMovies={fetchMovies} />
        </View>
    )
}