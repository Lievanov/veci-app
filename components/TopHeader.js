import React from 'react';

import { StyleSheet, Text,  View, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

export default function ({ toggleMenu, title }) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.expandButton}>
        <TouchableOpacity onPress={toggleMenu}>
          <Entypo style={styles.menu} name={"menu"} size={25} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text> 
      </View>
      <TouchableOpacity>
        <AntDesign name={"bells"} size={25} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 50,
    paddingBottom: 25,
    backgroundColor: "white",
    maxHeight: 100,
    justifyContent: 'space-between', 
    paddingHorizontal: 20, 
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  expandButton:{
    flexDirection: 'row',
  },
  title: {
    fontSize: 22,
    marginTop: 0
  },
  menu: {
    paddingRight: 6
  }
})