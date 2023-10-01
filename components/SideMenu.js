import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import SideMenuButton from './UI/SideMenuButton';

export default SideMenu = ({ navigation }) => {

  const [selected, setSelected] = useState("Inicio")

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const highlightButton = (screenName) => {
    setSelected(screenName)
    navigateToScreen(screenName)
  }

  return (

    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>Logo</Text>
      </View>
      <SideMenuButton title={"Inicio"} icon={"filetext1"} isSelected={selected === "Inicio" }  onPress={() => highlightButton('Inicio')} />
      <SideMenuButton title={"Marketplace"} icon={"shoppingcart"} isSelected={selected === "Marketplace" } onPress={() => highlightButton('Marketplace')} />
      <SideMenuButton title={"Invitaciones"} icon={"mail"} isSelected={selected === "Invitaciones" } onPress={() => highlightButton('Invitaciones')} />
      {/* <SideMenuButton title={"Grupos"} icon={"team"} isSelected={selected === "Grupos" } onPress={() => highlightButton('Grupos')} /> */}
      <View
        style={{
          borderBottomColor: 'white',
          marginHorizontal: 15,
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginVertical: 7
        }}
      />
      <SideMenuButton title={"Perfil"} icon={"solution1"} isSelected={selected === "Perfil" } onPress={() => highlightButton('Perfil')} />
      <SideMenuButton title={"Cerrar Sesion"} icon={"select1"} isSelected={selected === "" } onPress={() => highlightButton('Inicio')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop:55,
    backgroundColor: '#F96332'
  },
  logo: {
    borderRadius: 10,
    backgroundColor: "#ffffff",
    marginLeft: 20,
    marginVertical:15,
    width: 121,
    height: 50
  },
  logoText: {
    fontSize: 17,
    margin: 15,
  }
});
