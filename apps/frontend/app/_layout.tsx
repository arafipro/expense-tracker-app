import { Stack } from "expo-router/stack";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "../global.css";

export default function Layout() {
  return (
    <GluestackUIProvider mode="light"><Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack></GluestackUIProvider>
  );
}
