import React from "react"

import { Input, InputGroup, InputLeftElement, InputProps } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"

const SearchBar: React.FC<InputProps> = (props) => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input type="text" borderRadius="2rem" {...props} />
    </InputGroup>
  );
};

export default SearchBar;