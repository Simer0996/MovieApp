import React, { useState } from "react";
import {
  Select,
  Input,
  Icon,
  Text,
  CheckIcon,
  Center,
  Box,
  Flex,
  Button,
  FormControl
} from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import ContentList from "../lists/ContentList";
import { getSearchContent } from "../../handler/api";
import Loading from "../layout/Loading";

const Search = () => {
  const [searchType, setSearchType] = React.useState("multi");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onSearch = (searchType, title) => {
    setIsLoading(true);
    getSearchContent(searchType, title)
      .then((res) => {
        setContent(res);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  // const validate = () => {
  //   if (formData.name === undefined || formData.name === "") {
  //     setErrors({ ...errors, name: 'Movie/Tv Show name is required' })
  //   }
  // }

  return (
    <>
      <Center>
        <Box w="4/5" maxW="300" mt="5" mb="6">
          <FormControl isRequired>
            <FormControl.Label _text={{ bold: true }}>Search Movie/TV Show Name</FormControl.Label>
            <Input
              placeholder="i.e. James Bond, CSI"
              width="100%"
              borderRadius="4"
              py="3"
              px="1"
              fontSize="14"
              mt="3"
              onChangeText={(value) =>
                setTitle(value)}
              InputLeftElement={
                <Icon
                  m="2"
                  ml="3"
                  size="6"
                  color="gray.400"
                  as={<MaterialIcons name="search" />}
                />
              }
            />
            <FormControl.Label _text={{ bold: true }}>Choose Search Type</FormControl.Label>
            <Flex direction="row">
              <Select
                selectedValue={searchType}
                w="200"
                accessibilityLabel="Choose Category"
                placeholder="Choose Category"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={(itemValue) => {
                  setSearchType(itemValue);
                }}
              >
                <Select.Item label="multi" value="multi" />
                <Select.Item label="movie" value="movie" />
                <Select.Item label="tv" value="tv" />
              </Select>

              <Button
                colorScheme="blue"
                onPress={() => onSearch(searchType, title)}
                w="100"
                ml="4"
                leftIcon={<Icon as={Ionicons} name="search" size="sm" />}
              >
                Search
              </Button>
            </Flex>
            <FormControl.ErrorMessage _text={{ fontSize: 'xs' }}
            >Error Movie/TV show name is required</FormControl.ErrorMessage>
          </FormControl>
          <Text fontSize="xs">Please select a search type</Text>
        </Box>
      </Center>
      <Box>{isLoading ? <Loading /> : <ContentList data={content} />}</Box>
    </>
  );
};

export default Search;
