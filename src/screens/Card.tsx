import { StyleSheet, Dimensions, View } from 'react-native'
import React from 'react'
import { colors } from './colors'

export default function Card() {
  return (
    <View style={styles.card}>
     
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
        justifyContent:"center",
        marginBottom:150
    }
})