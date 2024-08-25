import { View } from "react-native";
import { Stack } from "expo-router";

const TabLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}} />
    </Stack>
  );
}

export default TabLayout;
