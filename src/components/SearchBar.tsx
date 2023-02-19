import React from 'react';

import {
  Input, InputGroup, InputLeftElement, InputProps,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
// import trpc from '@/utils/trpc';

const SearchBar: React.FC<InputProps> = (props) => {
  const [searchTerm, setSearchTerm] = React.useState<string>('');

  // const search = trpc.search.useQuery({ query: searchTerm });

  /* React.useEffect(() => {
    console.log(search.data?.results);
  }, [search.data?.results]); */

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="gray.300" />
      </InputLeftElement>
      <Input type="text" borderRadius="2rem" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} {...props} />
    </InputGroup>
  );
};

export default SearchBar;
