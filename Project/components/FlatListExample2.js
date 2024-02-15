import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Ladakh',
    imageUrl:'https://media.istockphoto.com/id/1439779760/photo/mesmerizing-view-of-the-pisang-village-with-the-mountains-covered-in-snow-in-nepal.jpg?s=2048x2048&w=is&k=20&c=wRcLKWALAyEg_P561LjYQNPYwJO5re21xDbHeCGfjYo=',
    desc:'Ladakh covers about 45,000 square miles (117,000 square km) and contains the Ladakh Range, which is a southeastern extension of the Karakoram Range, and the upper Indus River valley. Ladakh is one of the highest regions of the world. Its natural features consist mainly of high plains and deep valleys.',
    Place: 'Anywhere'
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
    title: 'UttaraKhand',
    imageUrl:'https://cdn.pixabay.com/photo/2020/01/22/12/11/rishikesh-4785189_1280.jpg',
    place: 'rishikash'
  },
];
  
  const Item = ({item}) => (
    <View style={styles.item}>
      <Image source={{uri:item.imageUrl}} style={styles.imagePhoto}></Image>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.title}>{item.desc}</Text>
      <Text style={styles.cardPlace}>{item.place}</Text>
    </View>
  );
  
  const FlatListExample2 = () => {
    return (
      <View style={styles.container}>
       {/* <ScrollVie */}
        <FlatList
          data={DATA}
       
          renderItem={({item}) => <Item  item={item} />}
          keyExtractor={item => item.id}
          ListHeaderComponent={() => {
            return (<Text style={styles.compHeader}>Welcome To The App
            </Text>)
          }}

          ListFooterComponent={()=> {
            return(<Text style={styles.compFooter} >Footer</Text>)
          }}
        />
        {/* </ScrollView> */}
        
      </View>
    );
  };
const styles = StyleSheet.create({
  container:{
    paddingHorizontal:12,
    backgroundColor:'#A4B0BD'
  },
    imagePhoto:{
        height:200,
        marginBottom:20
    },
    compHeader:{
      fontSize:30,
      color:'#F4C724'
    },
    compFooter:{
      fontSize:28,
      color: '#F4C724'
      
    },
    title:{
      fontSize:20,
      color:'#EA7773'
      
      
    },

})

export default FlatListExample2