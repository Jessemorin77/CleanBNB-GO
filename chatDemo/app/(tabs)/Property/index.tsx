import { Link } from "expo-router";
import { SafeAreaView, StyleSheet } from "react-native";
import { Text } from "../../../components/Themed";


export default function Propreties() {
  return(
    <SafeAreaView>

      <Text>Property </Text>
      <Link 
        href="/Property/AddPropertyScreen"
        style={styles.link}
      >
        AddProperty
      </Link>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  link: {
    color: "white"
  }
})
