import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Alert, ToastAndroid, FlatList} from 'react-native';
import firebase from "firebase"
import db from "../config"
export default class WelcomeScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            emailId:"",
            password:""
        }
    }
    login = (emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then(()=>{
            return Alert.alert("userLoginSuccessfully")
        })
        .catch((error)=>{
            return Alert.alert(error.message)
        })
    }
    signup = (emailId,password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId,password)
        .then(()=>{
            return Alert.alert("userSignupSuccessfully")
        })
        .catch((error)=>{
            return Alert.alert(error.message)
        })
    }
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.profileContainer}>
                <Image source = {require("../assets/barter pic.jpg")} style ={{width:200,height:200}}></Image>
                 <Text style ={{textAlign:"center",fontSize:30}}>Barter App</Text>
                </View>
                <View style = {styles.buttonContainer}>
                <TextInput placeholderTextColor = "White" keyboardType = {"email-address"}  style = {styles.loginBox} placeholder = "emailId" value = {this.state.emailId} onChangeText = {(text)=>{
                        this.setState({
                           emailId:text
                        })
                     }}></TextInput>
                     <TextInput placeholderTextColor = "White" secureTextEntry = {true}  style = {styles.loginBox} placeholder = "password" value = {this.state.password} onChangeText = {(text)=>{
                        this.setState({
                           password:text
                        })
                     }}></TextInput> 
                     <TouchableOpacity style = {[styles.button,{marginBottom:20,marginTop:20}]} onPress = {()=>{
                        this.login(this.state.emailId,this.state.password)
                    }}> 
                       <Text style = {{textAlign:"center"}}>LOGIN</Text> 
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button} onPress = {()=>{
                        this.signup(this.state.emailId,this.state.password)
                    }}> 
                       <Text style = {{textAlign:"center"}}>signup</Text> 
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    }
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#F8BE85'
    },
    profileContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    title :{
      fontSize:65,
      fontWeight:'300',
      paddingBottom:30,
      color : '#ff3d00'
    },
    loginBox:{
      width: 300,
      height: 40,
      borderBottomWidth: 1.5,
      borderColor : '#ff8a65',
      fontSize: 20,
      margin:10,
      paddingLeft:10
    },
    button:{
      width:300,
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:25,
      backgroundColor:"#ff9800",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.30,
      shadowRadius: 10.32,
      elevation: 16,
    },
    buttonText:{
      color:'#ffff',
      fontWeight:'200',
      fontSize:20
    },
    buttonContainer:{
      flex:1,
      alignItems:'center'
    }
  })