"use client";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Flex, TextField } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

interface Props {
  restaurantId: number;
}

const SearchBar = ({ restaurantId }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleNameChange(dishName: string) {
    const params = new URLSearchParams();
    if (dishName) params.append("dishName", dishName);
    if (searchParams.get("type"))
      params.append("type", searchParams.get("type")!);

    const query = params.size ? "?" + params.toString() : "";
    router.push(`/restaurants/${restaurantId}/dishes` + query);
  }

  return (
    <Flex pt={"9"} pb={"6"} className="">
      <TextField.Root
        className="w-full h-11 items-center px-3"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const searchQuery = e.target.value;
          handleNameChange(searchQuery);
        }}
      >
        <TextField.Input placeholder="Search For Dishes" />
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
    </Flex>
  );
};

export default SearchBar;
