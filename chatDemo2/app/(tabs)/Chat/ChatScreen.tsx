import { SafeAreaView } from "react-native"
import { Text } from "../../../components/Themed"
import { useNavigation, useRouter, useSearchParams } from "expo-router";

export default function ChatScreen() {
 
  const params = useSearchParams();
  
  console.log(params)
  return(
    <SafeAreaView>
      <Text>Chat Screen</Text>
      <Text>{}</Text>
    </SafeAreaView>
  )
}

