import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Data = [
    {
        id: '1',
        title: 'First Item',
    },
     {
        id: '2',
        title: 'second Item',
     },
     {
        id: '3',
        title: 'third Item'
     }
];



export default function FlatListExample() {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.Heading}>List using the Map function</Text>
     <View>
      {
        Data && (
            <View>
                <Text>Your data will appear here</Text>
               {Data.map((item) => (
                <Text key={item.id}> {item.title}</Text>
                ))}
                </View>
        )
      }
     </View>


     <View>
      <Text>FlatList Example In Detail</Text>
     

      
     </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   container:{
    backgroundColor:"#74B9FF"
    
   },
   Heading: {
    color:'#2C3335',
    fontSize:28,
   }
})