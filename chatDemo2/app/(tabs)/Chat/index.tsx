import { Link } from 'expo-router';
import React, {useState} from 'react';
import { 
  StyleSheet, 
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { Text, View} from '../../../components/Themed';

const DATA = [
  {
    id:'1',
    name:'Jesse'
  },
  {
    id:'2',
    name: 'Pedro'
  }
]

const renderItem = ({item}: {item: any}) => (
  <View>
    <Link href={{pathname: "/Chat/ChatScreen", params: {id: item.id}}} asChild>
    <Text style={styles.itemText}>{item.name}</Text>
    </Link>
  </View>
)

export default function TabOneScreen() {
  return (
  <SafeAreaView>
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={({ id }) => id} 
    />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-end'
  },
  itemText:{
    textAlign: "center",
    color: 'white',
    fontSize: 30,
    padding: 10
  }
});

