import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Header() {
  return (
    <View>
      <View style={styles.toolbar}>
        <Text style={styles.toolbarButton}>☰</Text>
        <Text style={styles.toolbarTitle}>Tasks</Text>
        <Text style={styles.toolbarButton}>🔍</Text>
      </View>
    </View>
  );
};

var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#3F51B5',
    padding: 16,
    flexDirection: 'row'    //Step 1
  },
  toolbarButton: {
    color: '#CFD8DC',
    height: 24,
    fontSize: 20,
    textAlignVertical: "center",
  },
  toolbarTitle: {
    color: '#CFD8DC',
    height: 24,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textAlignVertical: "center",
    flex: 1,                //Step 3
  }
});

export default Header;