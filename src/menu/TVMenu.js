
import { Select, Box, CheckIcon } from "native-base"
import React from 'react'

export default function TVMenu({ selectedTVType, setSelectedTVType }) {
    return (
        <Box w="90%">
            <Select
                selectedValue={selectedTVType}
                minWidth="150"
                placeholder="Choose TV Category"
                _selectedItem={{
                    bg: "#2c3e50",
                    endIcon: <CheckIcon size="4" />,
                }}
                mt={2}
                onValueChange={(e) => {
                    setSelectedTVType(e);
                }}
            >
                <Select.Item label="Airing Today" value="airing_today" />
                <Select.Item label="On The Air" value="on_the_air" />
                <Select.Item label="Popular" value="popular" />
                <Select.Item label="Top Rated" value="top_rated" />
            </Select>
        </Box>
    )
}