
import { Link } from "expo-router";
import { SafeAreaView, StyleSheet } from "react-native";
import { Text } from "../../../components/Themed";


export default function Listings() {
  return(
    <SafeAreaView>
      <Text>Listings</Text>
      <Link
        href="/Listing/AddListingScreen"  
        style={styles.link}
      >
        Add Listing
      </Link>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  link: {
    color: 'white'
  }
})
