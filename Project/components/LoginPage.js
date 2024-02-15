import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import { useState } from 'react'

const LoginPage = () => {
    const handleSubmit = () => {
        Alert.alert("Your Detail have Been Submited")
    }
 
    return (
      <View style = {styles.container}>
        <Text style= {styles.loginText}> Login Page </Text>

        <View>
            <Text style = {styles.detailText}>Enter Your Name</Text>
            <TextInput style = {styles.input} placeholder='enter the name'/>

            <Text style = {styles.detailText}>Enter Your Email</Text>
            <TextInput style = {styles.input} placeholder='enter the Email'/>

            
            <Text style = {styles.detailText}>Enter Your Password</Text>
            <TextInput style = {styles.input} placeholder='enter the Password'/>
            <View  style={styles.submitButton}>
            <TouchableOpacity >
                <Text style={styles.submit}
                onPress={handleSubmit}
                >Submit</Text>
            </TouchableOpacity>
            </View>
            
        </View>

        <View>
            
        </View>
      </View>
    )
  
}

export default LoginPage

const styles = StyleSheet.create({

})
