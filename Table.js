import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const DATA = [
  { id: '1', food: 'Mini Cinnamon Roll', amount: 'High' },
  { id: '2', food: 'Bacon', amount: 'Medium' },
  { id: '3', food: 'Beans de Charro', amount: 'Medium' },
  { id: '4', food: 'Coconut Sticky Rice', amount: 'None' },
  { id: '5', food: 'Hard Boiled Egg', amount: 'High' },
  { id: '6', food: 'Hash Brown Patty', amount: 'Low' },
  { id: '7', food: 'Maple Syrup', amount: 'Medium' },
  { id: '8', food: 'Oatmeal', amount: 'None' },
  { id: '9', food: 'Cream Gravy', amount: 'Low' },
  { id: '10', food: 'Roasted Vegetables', amount: 'Low' },
  { id: '11', food: 'Scrambled Eggs', amount: 'None' },
  { id: '12', food: 'Buttermilk Biscuit', amount: 'High' },
  { id: '13', food: 'Vegetarian Patty', amount: 'Medium' },
  { id: '14', food: 'Waffles', amount: 'High' },
  { id: '15', food: 'Banana', amount: 'Medium' },
  { id: '16', food: 'Fresh Orange', amount: 'None' },
  { id: '17', food: 'Gala Apple', amount: 'None' },
  { id: '18', food: 'Granny Smith Apple', amount: 'Low' },
  { id: '19', food: 'Blueberries', amount: 'None' },
  { id: '20', food: 'Cantaloupe', amount: 'None' },
  { id: '21', food: 'Diced Honeydew', amount: 'High' },

];

const TableItem = ({ item, index }) => (
  <View style={[styles.row, {backgroundColor: index % 2 === 0 ? '#b0c17d' : '#ffffff' }]}>
    <Text style={[styles.column, {fontSize: 16}]}>{item.food}</Text>
    <Text style={[{backgroundColor: '#dbdbdb'}, styles.column]}>{item.amount}</Text>
  </View>
);

const Table = () => {
  return (
    <View style={styles.container}>
    <FlatList
      data={DATA}
      renderItem={({ item, index }) => <TableItem item={item} index={index} />}
      keyExtractor={(item) => item.id}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 20,
    backgroundColor: '#ffffff'
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    borderBottomWidth: 2,
    flex: 1,
    paddingVertical: 20,
  },
  column: {
    flex: 1,
    fontWeight: 600,
    fontFamily: 'Avenir Next',
    textAlign: 'center',
  },
});

export default Table;
