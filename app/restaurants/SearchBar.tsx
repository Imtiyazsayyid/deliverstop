"use client";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Flex, TextField } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

const SearchBar = () => {
  const router = useRouter();

  return (
    <Flex py={"9"} className="">
      <TextField.Root
        className="w-full h-11 items-center px-3"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const searchQuery = e.target.value;
          if (searchQuery)
            router.push("/restaurants?restaurantName=" + searchQuery);
          else router.push("/restaurants");
        }}
      >
        <TextField.Input placeholder="Search For Resteraunts" />
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
    </Flex>
  );
};

export default SearchBar;
