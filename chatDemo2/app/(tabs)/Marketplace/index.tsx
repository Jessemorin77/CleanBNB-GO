import { 
   View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from 'react-native';
import sampleData from './sampleData.json'
import {Link} from 'expo-router'

type Listing = sampleData.listingData[0];

export default function MarketPlaceScreen() {
 //fetchdata
  const listings = sampleData.listingData.map((listing) => {
    const property = sampleData.propertyData.find(
      (property) => property.id === listing.propertyId,
    );
    return {
      ...listing,
      property,
    };
  });

  

    const renderMyItem: React.FC<{ listing: Listing }> = ({ listing }) => {
    //if (!listing.property || !listing.property.Image) {
      ////return null
    //}
   return (
    <View style={styles.listItem}>
      <Link href={{pathname: '/Marketplace/ListingDetailsScreen', params: { listingId: listing.id }}}>
        <View>
          <Image
            source={{ uri: listing.property.Image }}
            style={styles.listItemImage}
            resizeMode="cover"
          />
          <Text style={[styles.listItemText, styles.listItemTitle]}>
            {listing.title}
          </Text>
          <Text style={styles.listItemText}>{listing.description}</Text>
          <Text style={styles.listItemText}>Budget: ${listing.budget}</Text>
          <Text style={styles.listItemText}>Job Type: {listing.jobType}</Text>
          <Text style={styles.listItemText}>
            Contractor Type: {listing.contractorType}
          </Text>
        </View>
      </Link>
    </View>
  );  }

  return (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Marketplace</Text>
    <FlatList
      data={listings}
      renderItem={({ item }) => renderMyItem({ listing: item })}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
    />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 28,
    color: '#FFFFFF',
  },
  listItem: {
    marginBottom: 16,
    width: '50%',
    borderRadius: 12,
    borderColor: '#A9A9A9',
    borderWidth: 1,
    padding: 16,
  },
  listItemImage: {
    marginBottom: 16,
    height: 160,
    width: '100%',
    borderRadius: 12,
  },
  listItemTitle: {
    marginBottom: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  listItemText: {
    marginBottom: 8,
    color: '#FFFFFF',
  },
  list: {
    paddingVertical: 8,
  },
});
