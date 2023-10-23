import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Flex, TextField } from "@radix-ui/themes";

const SearchBar = () => {
  return (
    <Flex py={"9"} className="">
      <TextField.Root className="w-full h-11 items-center px-3">
        <TextField.Input placeholder="Search For Resteraunts" />
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
    </Flex>
  );
};

export default SearchBar;
