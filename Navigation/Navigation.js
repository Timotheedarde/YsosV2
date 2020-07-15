import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MapDuplicateAlertPage from '../Pages/MapStack/MapDuplicateAlert.page'
import MapPostEventPage from '../Pages/MapStack/MapPostEvent.page';
import MapEventDetailsPage from '../Pages/MapStack/MapEventDetails.page';
import MapMainPage from '../Pages/MapStack/MapMain.page';
import ProfilMainPage from '../Pages/ProfilStack/ProfilMain.page';

import Permission from '../Pages/MapStack/Permission.page';

import MapTestPage from '../Pages/MapStack/MapTest.page';
import MapTest2Page from '../Pages/MapStack/MapTest2.page';


function PermissionScreen() {
  return (
      <Permission/>
  );
}

function MapDuplicateAlertScreen() {
    return (
        <MapDuplicateAlertPage/>
    );
 }

function MapPostEventScreen({route}) {
    return (
        <MapPostEventPage route={route}/>
    );
}

function MapEventDetailsScreen({route}) {
    return (
        <MapEventDetailsPage route={route}/>
    );
}

function MapMainScreen({ navigation }) {
    return (
        <MapMainPage navigation={navigation}/>
    );
}

function MapTestScreen({ navigation }) {
  return (
      <MapTestPage navigation={navigation}/>
  );
}

function MapTest2Screen({ navigation, route }) {
  return (
      <MapTest2Page navigation={navigation} route={route}/>
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
      <HomeStack.Screen name="Permission" component={PermissionScreen} />
      <HomeStack.Screen name="MapEventDetails" component={MapEventDetailsScreen} />
      <HomeStack.Screen name="MapPostEvent" component={MapPostEventScreen} />
      <HomeStack.Screen name="MapDuplicateAlert" component={MapDuplicateAlertScreen} />
      <HomeStack.Screen name="MapTest" component={MapTestScreen} />
      <HomeStack.Screen name="MapTest2" component={MapTest2Screen} />
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
      <ProfilStack.Screen name="Profil" component={ProfilScreen}/>
    </ProfilStack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

function Navigation() {

  
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

export default Navigation