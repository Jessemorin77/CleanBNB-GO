import { Stack } from "expo-router";  

export default function ChatLayout() {
  return(
  <Stack>
    <Stack.Screen
      name="index"
      options={{
        title: "ChatList",
      }}
    />
    <Stack.Screen
      name="ChatScreen"
      options={{
      title: "Chat"
      }}
      />
  </Stack>
  )
}
