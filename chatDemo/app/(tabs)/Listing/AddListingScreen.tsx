
import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Switch } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { SelectDropdown } from "../../../components/NativeBase/SelectDropdown";

export default function AddListingScreen() {
  const [propertyID, setPropertyID] = useState("");
  const [jobType, setJobType] = useState("");
  const [contractorType, setContractorType] = useState("");
  const [budget, setBudget] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [readyToHire, setReadyToHire] = useState(false);

  // Replace with actual data
  const properties = [
    { Address: "123 Street", id: "1" },
    { Address: "456 Avenue", id: "2" },
    // ...
  ];

  const propertyOptions = properties.map((Property) => ({
    label: Property.Address,
    value: Property.id,
  }));

  const jobTypeOptions = [{ label: "Cleaning", value: "Cleaning" }]; // add more options as needed
  const contractorTypeOptions = [{ label: "Independent", value: "independent" }]; // add more options as needed

  const handleSubmit = () => {
    const listing = {
      propertyId: propertyID,
      jobType,
      contractorType,
      readyToHire,
      budget,
      title,
      description,
    };

    console.log(listing);

    // reset form
    setPropertyID("");
    setJobType("");
    setContractorType("");
    setBudget("");
    setTitle("");
    setDescription("");
    setReadyToHire(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          <Text>Pick Property: </Text>
          <SelectDropdown
            selectedValue={propertyID}
            onValueChange={setPropertyID}
            options={propertyOptions}
            placeholder="Select a property"
          />
        </View>
        <View style={styles.section}>
          <Text>Job Type: </Text>
          <SelectDropdown
            selectedValue={jobType}
            onValueChange={setJobType}
            options={jobTypeOptions}
            placeholder="Select job type"
          />
        </View>
        <View style={styles.section}>
          <Text>Contractor Type: </Text>
          <SelectDropdown
            selectedValue={contractorType}
            onValueChange={setContractorType}
            options={contractorTypeOptions}
            placeholder="Select contractor type"
          />
        </View>
        <View style={styles.section}>
          <Text>Ready to Hire? </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={readyToHire ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={setReadyToHire}
            value={readyToHire}
          />
        </View>
        <View style={styles.section}>
          <Text>Budget</Text>
          <TextInput
            style={styles.input}
            value={budget}
            onChangeText={setBudget}
            keyboardType="numeric"
            placeholder="Budget"
          />
        </View>
        <View style={styles.section}>
          <Text>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
            placeholder="Title"
          />
        </View>
        <View style={styles.section}>
          <Text>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={setDescription}
            placeholder="Description"
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  section: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

