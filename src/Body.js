import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, FlatList } from "react-native";


const DATA = [
  {
    id: '1',
    title: 'Schedule behind the wheel',
  },
  {
    id: '2',
    title: 'Buy groceries from nearby store',
  },
  {
    id: '3',
    title: 'Buy popcorn for movie night',
  },
  {
    id: '4',
    title: 'Buy 4K UHD Version of Interstellar',
  },
  {
    id: '5',
    title: 'Buy 4K UHD Version of Interstellar',
  },
  {
    id: '6',
    title: 'Buy 4K UHD Version of Interstellar',
  },
  {
    id: '7',
    title: 'Buy popcorn for movie night',
  },
  {
    id: '8',
    title: 'Buy popcorn for movie night',
  },
  {
    id: '9',
    title: 'Buy popcorn for movie night',
  },
  {
    id: '10',
    title: 'And more tasks..',
  },
];


function LineItem(props) {
  return (
    <View style={styles.lineItemView}>
      <Text style={styles.lineItemText}>
        {props.text}
      </Text>
    </View>
  );
}

function Body() {
  const renderItem = ({ item }) => (
    <LineItem text={item.title} />
  );

  return (
    <View style={styles.canvas}>
      <Text style={styles.title}>
        Inbox
      </Text>
      <SafeAreaView style={styles.list}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('Added new task')}
        >
          <Text>Create new task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

var styles = StyleSheet.create({
  canvas: {
  },
  title: {
    color: "white",
    fontSize: 24,
    padding: 16,
    fontWeight: "bold",
  },
  list: {
    padding: 5,
  },
  lineItemView: {
    margin: 5,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 25,
  },
  lineItemText: {
    color: "white",
    padding: 16,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  buttonWrapper: {
    margin: 10,
    padding: 10,
  }
});

export default Body;