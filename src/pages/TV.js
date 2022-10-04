import { Box, Select, Center } from "native-base"
import React, { useState, useEffect } from 'react'
import { getContent } from "../handler/api"
import TVMenu from "../menu/MovieMenu"

export function TV() {
    const [selectedTVType, setSelectedTVType] = useState("popular")
    const [tvData, setTVData] = useState([])

    const fetchTVShows = async () => {
        try {
            const data = await getContent("tv", selectedTVType)
            setTVData(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchTVShows()
    }, [selectedTVType])


    return (
        <Center>
            <TVMenu selectedTVType={selectedTVType} setSelectedTVType={setSelectedTVType} />
        </Center>
    )
}