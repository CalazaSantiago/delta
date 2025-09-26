import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './componentes/HomeScreen';
import CartScreen from './componentes/CartScreen';
import SettingsScreen from './componentes/SettingsScreen';
import ProfileScreen from './componentes/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Usamos el tema oscuro global
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          // Fondo oscuro de la barra
          tabBarStyle: {
            backgroundColor: '#1f1f1f',
            borderTopColor: '#2a2a2a',
            paddingBottom: 4,
            height: 60,
          },
          tabBarActiveTintColor: '#03DAC6',   // color activo (verde aqua)
          tabBarInactiveTintColor: '#888',    // color inactivo (gris)
          tabBarIcon: ({ color, size }) => {
            let iconName;

            // Íconos según pestaña
            switch (route.name) {
              case 'Inicio':
                iconName = 'home-outline';
                break;
              case 'Mi Perfil':
                iconName = 'person-outline';
                break;
              case 'Carrito':
                iconName = 'cart-outline';
                break;
              case 'Ajustes':
                iconName = 'settings-outline';
                break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Inicio" component={HomeScreen} />
        <Tab.Screen name="Mi Perfil" component={ProfileScreen} />
        <Tab.Screen name="Carrito" component={CartScreen} />
        <Tab.Screen name="Ajustes" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
