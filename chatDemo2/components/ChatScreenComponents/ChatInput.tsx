import React from 'react'
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {Text} from '../../components/Themed';

const ChatInput = ({value, onChangeText, onSend}) => {
  return (
    <View style={styles.chatInputContainer}>
      <TextInput
        style={styles.TextInput}
        value={value}
        onChangeText={onChangeText}
        placeholder="Message:"
      />
     <TouchableOpacity style={styles.sendButton} onPress={onSend}>
        <Text style={styles.sendButtonText}>Send</Text>
     </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  chatInputContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  TextInput: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal:10,
    paddingVertical: 8,
    borderWidth:1,
    borderColor: 'gray',
    borderRadius: 5,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16
  }

})

export default ChatInput;
