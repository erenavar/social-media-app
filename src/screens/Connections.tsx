import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from './colors'

export default function Connections({siteName}) {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>{siteName}</Text>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
       backgroundColor: colors.gray,
       marginBottom: 10,
       width: Dimensions.get("window").width-150,
       borderRadius:10,
        padding:15,
        marginVertical:5,
       alignItems:"center"
       

    },
    text:{
        color: colors.white,
        fontWeight:"bold"
     
    }
})