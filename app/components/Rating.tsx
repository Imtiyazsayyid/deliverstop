import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { Box } from "@radix-ui/themes";

const Rating = ({ rating }: { rating: number }) => {
  return (
    <Box className="h-1/6 flex items-center text-center text-yellow-400">
      {[...Array(rating)].map((star) => (
        <StarFilledIcon height={"25"} width={"25"} />
      ))}
      {[...Array(5 - rating)].map((star) => (
        <StarIcon height={"25"} width={"25"} />
      ))}
    </Box>
  );
};

export default Rating;
