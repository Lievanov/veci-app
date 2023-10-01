import * as React from 'react';
import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import SideMenu from './components/SideMenu';
import HomeScreen from './screens/HomeScreen';
import MarketplaceScreen from './screens/MarketplaceScreen';
import NotificationScreen from './screens/NotificationScreen';
import InvitationScreen from './screens/InvitationScreen';
import GroupScreen from './screens/GroupScreen';
import ProfileScreen from './screens/ProfileScreen';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName="Home"> */}
      <Drawer.Navigator drawerContent={(props) => <SideMenu {...props} />} >
        <Drawer.Screen name="Inicio" component={HomeScreen} options={{headerShown: false}} />
        <Drawer.Screen name="Marketplace" component={MarketplaceScreen} options={{headerShown: false}} />
        <Drawer.Screen name="Notificaciones" component={NotificationScreen} options={{headerShown: false}} />
        <Drawer.Screen name="Invitaciones" component={InvitationScreen} options={{headerShown: false}} />
        {/* <Drawer.Screen name="Grupos" component={GroupScreen} options={{headerShown: false}} /> */}
        <Drawer.Screen name="Perfil" component={ProfileScreen} options={{headerShown: false}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

