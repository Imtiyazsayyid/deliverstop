"use client";
import { Select } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface Props {
  restaurantId: number;
}

const TypeFilter = ({ restaurantId }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleTypeChange(type: string) {
    const params = new URLSearchParams();
    if (type === "none") {
      if (searchParams.get("dishName")) {
        params.append("dishName", searchParams.get("dishName")!);
        const query = params.size ? "?" + params.toString() : "";
        router.push(`/restaurants/${restaurantId}/dishes` + query);
      } else {
        router.push(`/restaurants/${restaurantId}/dishes`);
      }
      return;
    }
    if (type) params.append("type", type);
    if (searchParams.get("dishName"))
      params.append("dishName", searchParams.get("dishName")!);

    const query = params.size ? "?" + params.toString() : "";
    router.push(`/restaurants/${restaurantId}/dishes` + query);
  }

  return (
    <Select.Root defaultValue="none" onValueChange={handleTypeChange}>
      <Select.Trigger placeholder="Type" />
      <Select.Content>
        <Select.Group>
          <Select.Label>Type</Select.Label>
          <Select.Item value="none">All</Select.Item>
          <Select.Item value="VEG">Veg</Select.Item>
          <Select.Item value="NON_VEG">Non-Veg</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default TypeFilter;
