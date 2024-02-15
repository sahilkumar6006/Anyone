import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function LastPage({navigation}) {
    return (
        <>
            <View style={styles.headerContainer}>
                <Image source={require('../Images/shape.png')} style={styles.Img} />
                <Image source={require('../Images/Elipse.png')} style={styles.ImgCam} />
                <Text style={styles.textWlcm}>Welcome Jeegar goyani</Text>
            </View>

            <Text style={{ alignSelf: 'flex-end', marginEnd: 30, color: '#000000', fontWeight: '400' }} onPress={()=> navigation.navigate('ProfilePage')}>Good Afternoon</Text>

            <Image source={require('../Images/clock.png')} style={styles.ImgClock} />

            <Text style={styles.taskHeader}>Task list</Text>

            <View style={styles.TaskContainer}>
                <View style={styles.TaskHeader}>
                <Text>Daily Task</Text>
                <Image source={require('../Images/plus.png')} />
                </View>

                <View style={styles.TodoContainer}>
                    <View style={styles.TaskDetail}>
                    <Image source={require('../Images/Rectangle.png')} style={styles.rectImg} />
                    <Text style={{ fontSize: 16, height: 20,  }}>Learning Programming by 12PM</Text>
                    </View>
                 
                    <View style={styles.TaskDetail}>
                    <Image source={require('../Images/Rectangle.png')} style={styles.rectImg} />
                    <Text style={{ fontSize: 16, height: 20,  }}>Learn how to cook by 1PM</Text>
                    </View>

                    <View style={styles.TaskDetail}>
                    <Image source={require('../Images/Rectangle.png')} style={styles.rectImg} />
                    <Text style={{ fontSize: 16, height: 20,  }}>Learn how to play at 2PM</Text>
                    </View>
                
                
                </View>
              
            </View>
        </>

    )


}

const styles = StyleSheet.create({
    Img: {
     height:100,
     width:100,
     resizeMode:'contain'
    },
    headerContainer: {
        backgroundColor: '#50C2C9',
        marginBottom: 8,
        height:250

    },
    ImgCam: {
        alignSelf: 'center',
        marginBottom: 12
    },
    textWlcm: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#FFFFFF'
    },
    ImgClock: {
        alignSelf: 'center'

    },
    taskHeader: {
        color: '#000000',
        fontSize: 16,
        padding: 24
    },
    TaskContainer: {
        width:350,
        height:200,
        borderWidth:0.1,
        // backgroundColor:'green',
        marginHorizontal:23,
        marginBottom:5,
        elevation:4,
        shadowColor:'#1E1E1E',
        shadowOffset:{
            width:2,
            height:2
        }
   
       
      
       
    },
    TaskHeader:{
    
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:10,
        padding:20,
        marginHorizontal:6
    
    },
    TodoContainer:{
      
    },

    TaskDetail:{
        padding:8,
        flexDirection:'row'
    },
    rectImg:{
        marginRight: 20,
         marginHorizontal:8
    }
    


})