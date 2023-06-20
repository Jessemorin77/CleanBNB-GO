import React from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from "react-native";

interface PropertyData {
  Address: string;
  City: string;
  State: string;
  Zip: number;
  Beds: number;
  Baths: number;
  Sqft: number;
  Type: string;
  Status: string;
  Image: string;
  Desc: string;
}

export default function AddPropertyScreen() {
  const [propertyData, setPropertyData] = React.useState<PropertyData>({
    Address: "",
    City: "",
    State: "",
    Zip: 0,
    Beds: 0,
    Baths: 0,
    Sqft: 0,
    Type: "",
    Status: "",
    Image: "",
    Desc: "",
  });

  const handleInputChange = (
    key: keyof PropertyData,
    value: string | number,
  ): void => {
    setPropertyData((prevData) => ({ ...prevData, [key]: value }));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange("Address", value)}
        placeholder="Address"
        placeholderTextColor="#A9A9A9"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange("City", value)}
        placeholder="City"
        placeholderTextColor="#A9A9A9"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange("State", value)}
        placeholder="State"
        placeholderTextColor="#A9A9A9"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange("Zip", Number(value) || 0)}
        placeholder="Zip"
        placeholderTextColor="#A9A9A9"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange("Beds", Number(value) || 0)}
        placeholder="Beds"
        placeholderTextColor="#A9A9A9"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange("Baths", Number(value) || 0)}
        placeholder="Baths"
        placeholderTextColor="#A9A9A9"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange("Sqft", Number(value) || 0)}
        placeholder="Sqft"
        placeholderTextColor="#A9A9A9"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange("Type", value)}
        placeholder="Type"
        placeholderTextColor="#A9A9A9"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange("Status", value)}
        placeholder="Status"
        placeholderTextColor="#A9A9A9"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange("Image", value)}
        placeholder="Image"
        placeholderTextColor="#A9A9A9"
      />
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange("Desc", value)}
        placeholder="Desc"
        placeholderTextColor="#A9A9A9"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log(propertyData);
        }}
      >
        <Text style={styles.buttonText}>Add Property</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
  },
  input: {
    marginBottom: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    borderColor: '#A9A9A9',
    borderWidth: 1,
    color: '#FFFFFF',
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#1E90FF',
    padding: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '500',
  },
});

