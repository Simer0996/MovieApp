import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import { Box, Text } from "native-base"
import { showDetails } from "../../handler/api";

const ShowScreen = ({ route }) => {
  const { id, type } = route.params;
  const [specific, setSpecific] = useState({});

  useEffect(async () => {
    try {
      const data = await showDetails(type, id)
      setSpecific(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <Box style={{ padding: 20 }}>
        <Box style={{ marginBottom: 20 }}>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 20,
              marginBottom: 40,
            }}
          >
            {specific.title}
          </Text>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${specific.poster_path}`,

            }}
            style={{ width: 250, alignSelf: "center", height: 300 }}
          />
        </Box>
        <Box style={{ pt: 5, alignSelf: "center" }}>
          <Text>Overview: {specific.overview}</Text>
          <Box style={{ flexDirection: "row", marginTop: 20, }}>
            <Text>Popularity: {specific.popularity} | </Text>
            <Text>Release Date: {specific.release_date}</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ShowScreen;
