import { FlatList, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View ,} from 'react-native'
import React, { useState } from 'react'

export default function Profile() {
  const [task, settask] = useState('')
  const [tasks, settasks] = useState([])


const renderItem = ({item, index}) => (
  <View style={{ flex:1,flexDirection:"row" , justifyContent:'space-between' ,marginHorizontal:20}}>

    <Text>{item}</Text>
    <Pressable onPress={handleEdit}><Text>Edit</Text></Pressable>
    <Pressable onPress={handleDelete}><Text>Delete</Text></Pressable>
    
  </View>

)

const handleEdit = () => {

}

const handleDelete = () => {
  
}

const handleAddTask = () => {
  settasks([...tasks, task])
}
  
  return (
  <SafeAreaView>
    <ScrollView>
  
 
 <View>
      <Image source={require('../Images/profileLogo.jpg')} style={styles.profileImg}/>
        <Text style={{fontSize:28 , alignSelf:'center'}}>About Me</Text>
     
        <TextInput placeholder='Coding is fun' numberOfLines={4} multiline={true} scrollEnabled={false}
        style={styles.BioText}
        />
          
    </View>
  <View>

<Text style={{fontSize:28, alignSelf:'center'}}>ToDo</Text>
<TextInput placeholder='Add the task' style={styles.AddTask}
onChangeText={(text) => settask(text) }
></TextInput>
<TouchableOpacity style={styles.TextAdd} onPress={handleAddTask}>
  <Text>Add Task</Text>
</TouchableOpacity>

</View>
</ScrollView>

<FlatList
 keyboardShouldPersistTaps={'handled'}
 nestedScrollEnabled={true}
  data={tasks}
  renderItem={renderItem}
  keyExtractor={(index,item) => index.toString()}
/>




  </SafeAreaView>
   
  )
}

const styles = StyleSheet.create({
  BioText:{
    width:'70%',
    height:150,
    marginTop:10,
    borderWidth:1,
    borderRadius:8,
    marginStart:20,
    textAlignVertical:'top',
    alignSelf:'center'
  },
  profileImg:{
    width:200,
    height:200,
    alignSelf:'center'
  },
  AddTask:{
    marginTop:20,
    height:60,
    width:"80%",
    borderWidth:1,
    borderRadius:6,
    alignSelf:'center',
    marginHorizontal:20,
  },
  TextAdd:{
    marginTop:20,
    backgroundColor:'#50C2C9',
    marginHorizontal:20,
    borderRadius:6,
    height:40,
    justifyContent:'center',
    alignItems:'center'
  }
})