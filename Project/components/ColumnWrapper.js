import React from 'react';
import { View, StyleSheet } from 'react-native';

const MyComponent = () => {
  return (
    <View style={styles.columnWrapper}>
      {/* Content of the columns goes here */}
      <View style={styles.column}>Column 1 content</View>
      <View style={styles.column}>Column 2 content</View>
      <View style={styles.column}>Column 3 content</View>
    </View>
  );
};

const styles = StyleSheet.create({
  columnWrapper: {
    flexDirection: 'row', // Arrange children horizontally
    justifyContent: 'space-between', // Distribute children along the main axis
  },
  column: {
    flex: 1, // Occupy equal space within the row
  },
});

export default MyComponent;
