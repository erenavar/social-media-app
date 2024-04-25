import { StyleSheet, Dimensions, View, Image,Text } from 'react-native'
import React from 'react'
import { colors } from './colors'
import Connections from './Connections'

export default function Card() {
  return (
    <View style={styles.card}>
        <Image style={styles.img} source={require("../../assets/photo.jpg")}/>
        <Text style={styles.fullName}>Eren AVAR</Text>
        <Text style={styles.location}>Utrecht</Text>
        <Text style={styles.job}>Mobile Developer</Text>
        <View>
            <Connections/>
        </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
    card : {
        width: Dimensions.get("window").width - 90,
        height:400,
        backgroundColor : colors.darkgray,
        borderRadius:12,
        alignItems:"center",
        paddingTop:24,
        marginBottom:150
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


    }
})