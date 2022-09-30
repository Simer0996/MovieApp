// import { View, Text } from 'react-native'
import React from 'react'
import {Box, StatusBar, HStack,Text} from 'native-base'

export default function Header() {
  return (
    <>
        <StatusBar backgroundColor="#2c3e50" barStyle="light-content" />
        <Box safeAreaTop backgroundColor="#2c3e50"></Box>
        <HStack bg="#2c3e50" px={1} py={3} alignItems='center' justifyContent='center'>
        <Text color='white' fontSize={20} fontWeight="bold">Movie App</Text>
        </HStack>
    </>
  )
}