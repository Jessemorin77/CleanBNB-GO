import {Text, SafeAreaView, StyleSheet} from 'react-native'
import { useSearchParams } from "expo-router";

export default function ListingDetailsScreen() {
    const params = useSearchParams();

    const { listingId } = params;
    console.log(params)
  return(
    <SafeAreaView>
    <Text>Listing Details</Text>
      <Text style={styles.text}>{listingId}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text: {
    padding: 10,
    color: "white"
  }
})

