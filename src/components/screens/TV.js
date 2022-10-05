import React, { useState, useEffect } from "react";
import { getContent } from "../../handler/api";
import ContentList from "../lists/ContentList";
import Loading from "../layout/Loading";
import { Menu } from "../menu/Menu";

const TV = () => {
  const [selectedTV, setSelectedTV] = React.useState("popular");
  const [tVData, setTVData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [tvCategories, setTVCategories] = useState(["airing_today", "on_the_air", "popular", "top_rated"])

  useEffect(() => {
    fetchTVShows();
  }, [selectedTV]);

  const fetchTVShows = async () => {
    setIsLoading(true);
    try {
      const data = await getContent("tv", selectedTV)
      setTVData(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err)
    }
  }




  return (
    <>
      <Menu setSelectedContent={setSelectedTV} selectedContent={selectedTV} categories={tvCategories} />
      {isLoading ? <Loading /> : <ContentList data={tVData} type="tv" />}
    </>
  );
};

export default TV;
