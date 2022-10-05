
import React from 'react'
import { Center, Select, Box, CheckIcon } from "native-base"

export function Menu({ selectedContent, setSelectedContent, categories }) {
    return (
        <>
            <Center>
                <Box w="70%" mt="10" mb="6">
                    <Select
                        selectedValue={selectedContent}
                        minWidth="200"
                        accessibilityLabel="Choose Movies Category"
                        placeholder="Choose Movies Category"
                        _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size="5" />,
                        }}
                        onValueChange={(itemValue) => {
                            setSelectedContent(itemValue);
                        }}
                    >
                        <Select.Item label={categories[0]} value={categories[0]} />
                        <Select.Item label={categories[1]} value={categories[1]} />
                        <Select.Item label={categories[2]} value={categories[2]} />
                        <Select.Item label={categories[3]} value={categories[3]} />
                    </Select>
                </Box>
            </Center>
        </>
    )
}


