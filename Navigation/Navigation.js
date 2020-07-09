import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MapDuplicateAlertPage from '../Pages/MapStack/MapDuplicateAlert.page'
import MapPostEventPage from '../Pages/MapStack/MapPostEvent.page';
import MapEventDetailsPage from '../Pages/MapStack/MapEventDetails.page';
import MapMainPage from '../Pages/MapStack/MapMain.page';
import ProfilMainPage from '../Pages/ProfilStack/ProfilMain.page';

function MapDuplicateAlertScreen() {
    return (
        <MapDuplicateAlertPage/>
    );
 }

function MapPostEventScreen() {
    return (
        <MapPostEventPage/>
    );
}

function MapEventDetailsScreen() {
    return (
        <MapEventDetailsPage/>
    );
}

function MapMainScreen({ navigation }) {
    return (
        <MapMainPage navigation={navigation}/>
    );
}


function ProfilScreen({ navigation }) {

    return (
        <ProfilMainPage navigation={navigation}/>
    );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#3A60F8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <HomeStack.Screen name="MapMain" component={MapMainScreen} />
      <HomeStack.Screen name="MapEventDetails" component={MapEventDetailsScreen} />
      <HomeStack.Screen name="MapPostEvent" component={MapPostEventScreen} />
      <HomeStack.Screen name="MapDuplicateAlert" component={MapDuplicateAlertScreen} />
    </HomeStack.Navigator>
  );
}

const ProfilStack = createStackNavigator();

function ProfilStackScreen() {
  return (
    <ProfilStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#3A60F8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <ProfilStack.Screen name="Profil" component={ProfilScreen} />
    </ProfilStack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={{ backgroundColor: '#3A60F8' }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} 
          options={{
            tabBarLabel: 'MAP',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="map" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen name="Profil" component={ProfilStackScreen}
          options={{
            tabBarLabel: 'PROFIL',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}