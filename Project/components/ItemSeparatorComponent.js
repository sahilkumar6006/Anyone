import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SeparatorComponent =() => {
    return(
        <View 
        style={{
            height:1,
            width:"100%",
            backgroundColor:"#CED0CE",
        }}
        />
    )
}
export default function ItemSeparatorComponent() {
    const renderItem = ({item}) => (
        <View>
            <Text>{item.title}</Text>
        </View>

    )
 
    const data = [
        { id: 1, title: 'Item 1' },
        { id: 2, title: 'Item 2' },
        { id: 3, title: 'Item 3' },
        
      ];
  return (
    <FlatList>
        data ={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent ={SeparatorComponent}
    </FlatList>
   
  )
}

const styles = StyleSheet.create({})