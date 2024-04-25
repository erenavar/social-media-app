import { StyleSheet, Dimensions, View, Image,Text } from 'react-native'
import React from 'react'
import { colors } from './colors'
import Connections from './Connections'

const accounts = [
    {id:"1",name:"GitHub",URL:"https://github.com/erenavar"},
    {id:"2",name:"Linkedin",URL:"https://www.linkedin.com/in/erenavar/"},
    {id:"3",name:"Instagram",URL:"https://www.instagram.com/erenavarr/"},
]


export default function Card() {
  return (
    <View style={styles.card}>
        <Image style={styles.img} source={require("../../assets/photo.jpg")}/>
        <Text style={styles.fullName}>Eren AVAR</Text>
        <Text style={styles.location}>Utrecht</Text>
        <Text style={styles.job}>Mobile Developer</Text>
        <View>
            {accounts.map((item) => (
                    <Connections key={item.id} siteName={item.name} adress={item.URL}/>
            ))}
        </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
    card : {
        width: Dimensions.get("window").width - 90,
        backgroundColor : colors.darkgray,
        borderRadius:12,
        alignItems:"center",
        marginBottom:150,
        padding:24

    },
    img:{
        width: 90,
        height:90,
        borderRadius: 100
    },
    fullName: {
        marginTop:30,
        color:colors.white,
        fontSize:20

    },
    location:{
        color: colors.neonGreen,
        fontSize:14,
        marginTop:5,
        fontWeight:"700"

    },
    job: {
        marginTop: 20,
        color: colors.white,
        marginBottom:20


    }
})