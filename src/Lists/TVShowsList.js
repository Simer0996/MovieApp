import { View, Text } from 'react-native'
import React from 'react'
import { FlatList, Box } from 'native-base'
// import TVCard from "../Cards/TVCard"

const TVShowsList = ({ tVData }) => {
    return (
        <>
            <Box>
                <FlatList data={tVData} renderItems={({ item }) => <TVCard item={item} />} />
            </Box>
        </>
    )
}

export default TVShowsList