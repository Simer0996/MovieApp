import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TVMenu } from '../components/TVMenu'
import { getTvShows } from '../handler/api'

export function TV() {
    const [selectedTvType, setSelectedTvType] = useState()
    const [tVData, setTVData] = useState([])

    const fetchTVShows = async () => {
        try {
            const data = await getTvShows(selectedTvType)
            setTVData(data)
        } catch (error) {
            console.log(error)
        }
    }
    console.log(tVData)

    return (
        <View>
            <TVMenu setSelectedTvType={setSelectedTvType} fetchTVShows={fetchTVShows} />
        </View>
    )
}