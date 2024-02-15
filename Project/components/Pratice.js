import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Ladakh',
      imageUrl:'https://media.istockphoto.com/id/1439779760/photo/mesmerizing-view-of-the-pisang-village-with-the-mountains-covered-in-snow-in-nepal.jpg?s=2048x2048&w=is&k=20&c=wRcLKWALAyEg_P561LjYQNPYwJO5re21xDbHeCGfjYo=',
      desc:'Ladakh is one of the highest regions of the world. Its natural features consist mainly of high plains and deep valleys.',
      place: 'Jammu and Kashmir'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Taj Mahal',
      desc:'Taj Mahal is located in Agra, a city in Uttar Pradesh. This famous monument is situated on the banks of the river Yamuna. Taj Mahal was built in 1632 by the Mughal emperor Shah Jahan.',
      imageUrl:'https://cdn.pixabay.com/photo/2015/07/29/22/56/taj-mahal-866692_1280.jpg',
      place: 'Delhi'
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Rishikesh',
      desc:'Rishikesh, also spelt as Hrishikesh, is a city near Dehradun in Dehradun district of the Indian state Uttarakhand. It is situated on the right bank of the .',
      imageUrl:'https://cdn.pixabay.com/photo/2020/01/22/12/11/rishikesh-4785189_1280.jpg',
      place: 'Rishikash'
    },
  ];
  
  const Item = ({item}) => (
    <View style={styles.item}>
      <Image source={item.imageUrl} style={styles.imagePhoto}/>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.title}>{item.desc}</Text>
      <Text style={styles.cardPlace}>{item.place}</Text>
    </View>
  );
  
  const Pratice = () => {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item  item={item} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  };
const styles = StyleSheet.create({
    imagePhoto:{
        width:200,
        height:200,
        borderRadius: 6,
      
        
        
    },
    item: {
      
      flex: 1,
      backgroundColor: "#7CEC9F",
      marginBottom: 8,
      paddingHorizontal:5,
      elevation:5
     

    },
    cardPlace: {
      fontSize:30
    }
})

export default Pratice