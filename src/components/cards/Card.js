import {
  Box,
  Button,
  Divider,
  Heading,
  Image,
  Text,
  VStack,
  Flex,
} from "native-base";
import { useNavigation } from "@react-navigation/native";

const Card = ({ image, title, date, name, popularity, id, type }) => {
  const navigation = useNavigation();
  return (
    <Box borderBottomWidth={1} >
      <VStack space={1} divider={<Divider />}>
        <Flex direction="row" align="center" mt="2" mb="2" >
          <Box w="100" mr="4" ml="3">
            <Image
              alt={image}
              source={{ uri: image }}
              w="125"
              h="150"
            />
          </Box>

          <Box mt="-50">
            <Heading size="sm">{title}</Heading>
            <Text>Popularity: {popularity}</Text>
            <Text>Release Date: {date}</Text>
            <Button colorScheme="blue"
              mt="1"
              w="225"
              onPress={() =>
                navigation.navigate("Show", {
                  title: title,
                  name: name,
                  id: id,
                  type: type,
                })
              }
            >
              More Details
            </Button>
          </Box>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Card;
