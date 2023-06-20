
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreenCards() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.innerView}>
          <Text style={styles.title}>
            Clean<Text style={styles.subTitle}>BNB</Text>-Owners
          </Text>
          <TouchableOpacity>
            <View style={styles.card}>
              <Image
                source={{uri: "https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80"}}
                style={styles.image}
              />
              <Text style={styles.cardText}>Setup Your Profile</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.card}>
              <Image
                source={{uri: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"}}
                style={styles.image}
              />
              <Text style={styles.cardText}>Find Jobs Near You</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.card}>
              <Image
                source={{uri: "https://media.istockphoto.com/id/1320438605/photo/gavel-with-miniature-model-house-on-shelf.jpg?b=1&s=170667a&w=0&k=20&c=MTWJj9spHcvHkb5EMteYfMCYcYGyEv_1JOIfWXJjol0="}}
                style={styles.image}
              />
              <Text style={styles.cardText}>Chat With clients</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.card}>
              <Image
                source={{uri: "https://images.unsplash.com/photo-1529119368496-2dfda6ec2804?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFwcG9pbnRtZW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}}
                style={styles.image}
              />
              <Text style={styles.cardText}>View Your Balance</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.card}>
              <Image
                source={{uri: "https://images.unsplash.com/photo-1608093310225-bb8260a85072?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRleHRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"}}
                style={styles.image}
              />
              <Text style={styles.cardText}>Chat With Cleaners</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
  },
  innerView: {
    flex: 1,
    padding: 16,
  },
  title: {
    textAlign: 'center',
    paddingBottom: 16,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subTitle: {
    color: '#cc66ff',
  },
  card: {
    margin: 16,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  image: {
    height: 160,
    width: '100%',
  },
  cardText: {
    padding: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
});


