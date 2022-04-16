import React, { useState } from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import jsonplaceholder from "./apis/jsonplaceholder";
import Resources from "./components/Resources";
import Btn from "./components/Btn";

const App = () => {
  const [resources, setResources] = useState([]);
  const getPosts = async () => {
    //   正常に動いている時はtry　エラーがあった場合はcatch
    try {
      const posts = await jsonplaceholder.get("/posts");
      setResources(posts.data);
    } catch (error) {
      console.log("error");
    }
  };
  const getAlbums = async () => {
    //   正常に動いている時はtry　エラーがあった場合はcatch
    try {
      const albums = await jsonplaceholder.get("/albums");
      setResources(albums.data);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <ChakraProvider>
        <Box mt={4}>
          <Btn onClick={getPosts} colorScheme="teal" text="Posts" />
          <Btn onClick={getAlbums} colorScheme="teal" text="Albums" />
        </Box>
      </ChakraProvider>
    </>
  );
};

export default App;
