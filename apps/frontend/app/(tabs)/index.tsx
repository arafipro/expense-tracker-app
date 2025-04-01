import { Box } from "@/components/ui/box";
import { Text } from "react-native";
import { PieChart } from "react-native-gifted-charts";

export default function Tab() {
  return (
    <Box className="bg-red-500 flex-1 justify-center items-center">
      <Text>Home</Text>
      <PieChart
        data={[{ value: 15 }, { value: 30 }, { value: 26 }, { value: 40 }]}
      />
    </Box>
  );
}
