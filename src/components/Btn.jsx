import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";

const Btn = ({ onClick, colorScheme, text }) => {
  return (
    <>
      <Button onClick={onClick} className={`ui ${colorScheme} button `}>
        {text}
      </Button>
    </>
  );
};

export default Btn;
