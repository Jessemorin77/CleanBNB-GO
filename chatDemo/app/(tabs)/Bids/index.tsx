
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from "react-native";

interface BidData {
  id: string;
  userId: string;
  listingId: string;
  listing?: ListingData | null;
  bidAmount?: number;
  bidMessage?: string;
  bidStatus?: string;
  bidDate?: string;
}

interface ListingData {
  id: string;
  title: string;
  status: string;
}

// replace with your actual data
const bidData: BidData[] = [
  {
    id: '1',
    userId: 'u1',
    listingId: 'l1',
    listing: { id: 'l1', title: 'Listing 1', status: 'open' },
    bidAmount: 500,
    bidMessage: 'This is my bid',
    bidStatus: 'pending',
    bidDate: '2023-06-15',
  },
  // more bids...
];

export default function BidScreen() {
  const [bids, setBids] = useState(bidData);

  const handleAcceptBid = (bidId: string) => {
    // manipulate your data here
    console.log(`Bid ${bidId} accepted`);
    // reflect changes on your data if necessary
    // setBids(updatedBids);
  };

  const handleDeclineBid = (bidId: string) => {
    // manipulate your data here
    console.log(`Bid ${bidId} declined`);
    // reflect changes on your data if necessary
    // setBids(updatedBids);
  };

  const handleDeleteBid = (bidId: string) => {
    // manipulate your data here
    console.log(`Bid ${bidId} deleted`);
    // reflect changes on your data if necessary
    // setBids(updatedBids);
  };

  const renderItem = ({ item }: { item: BidData }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.listing?.title}</Text>
      <Text style={styles.text}>Status: {item.bidStatus}</Text>
      <Text style={styles.text}>Bid Amount: {item.bidAmount}</Text>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleAcceptBid(item.id)}>
          <Text style={styles.accept}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeclineBid(item.id)}>
          <Text style={styles.decline}>Decline</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteBid(item.id)}>
          <Text style={styles.delete}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Bids</Text>
      <FlatList
        data={bids}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
  },
  card: {
    marginBottom: 16,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 16,
  },
  title: {
    marginBottom: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    color: 'white',
  },
  row: {
    marginTop: 8,
    flexDirection: 'row',
  },
  accept: {
    marginRight: 16,
    color: 'green',
  },
  decline: {
    marginRight: 16,
    color: 'red',
  },
  delete: {
    color: 'blue',
  },
});

