import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const Category = (props) => {
  return (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => {
        props.onSelect();
      }}
    >
      <View
        style={{ ...styles.container, ...{ backgroundColor: props.color } }}
      >
        <Text style={styles.title} numberOfLines={2}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    gridItem: {
      flex: 1,
      margin: 15,
      height: 150,
    },
    container: {
        height: 165,
        width: 165,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    title: {
        color: '#3F2305',
        fontSize: 18,
        marginTop: 5
    },
  });
  
  export default Category;
  