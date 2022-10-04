
import { Select, Box, CheckIcon } from "native-base"
import React from 'react'

export default function MovieMenu({ setSelectedMovieType, selectedMovieType }) {
    return (
        <Box w="90%">
            <Select
                selectedValue={selectedMovieType}
                minWidth="150"
                placeholder="Choose Movies Category"
                _selectedItem={{
                    bg: "#2c3e50",
                    endIcon: <CheckIcon size="4" />,
                }}
                mt={2}
                onValueChange={(e) => {
                    setSelectedMovieType(e);
                }}
            >
                <Select.Item label="Now Playing" value="now_playing" />
                <Select.Item label="Popular" value="popular" />
                <Select.Item label="Top Rated" value="top_rated" />
                <Select.Item label="Upcoming" value="upcoming" />
            </Select>
        </Box>
    )
}