import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default SideMenuButton = ({ onPress, title, isSelected, icon }) => (
  <TouchableOpacity 
    onPress={onPress} 
    style={isSelected ? styles.appButtonContainerSelected : styles.appButtonContainer }>
      <AntDesign name={icon} style={isSelected ? styles.appButtonIconSelected : styles.appButtonIcon } size={20} />
      <Text style={isSelected ? styles.appButtonTextSelected : styles.appButtonText }>{title}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  appButtonContainerSelected: {
    flexDirection: 'row',
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingVertical: 20,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    
  },
  appButtonTextSelected: {
    fontSize: 18,
    color: "#000000",
    marginLeft: 5,
    // alignSelf: "center",
  },
  appButtonIconSelected: {
    color: "#F96332",
    marginLeft: 10
  },
  appButtonContainer: {
    flexDirection: 'row',
    borderRadius: 10,
    paddingVertical: 20,
    marginHorizontal: 20
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    marginLeft: 5,
    // alignSelf: "center",
  },
  appButtonIcon: {
    color: "#fff",
    marginLeft: 10
  }
});