// [External]
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// [Internal]
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Text,
  View,
} from 'react-native';
import { store } from './src/app/store';


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

const MainScreens = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name='Home' component={HomeScreen} />
    </Tab.Navigator>
  );

  // return (
  //      <View style={styles.stack}>
  //       <Tab.Navigator screenOptions={{
  //         tabBarStyle: { backgroundColor: '#1F2C44', borderTopWidth: 0, borderTopColor: Colors.TextColor, borderRadius: 0, paddingTop: 10 }, 
  //         headerTitleAlign: 'center',
  //         headerRight: HeaderRight,
  //         headerStyle: { backgroundColor: Colors.PrimaryDarkColor},
  //         headerTitleStyle: {
  //           fontSize: 24,
  //         },
  //         headerTintColor: Colors.TextColor
  //       }}>
  //           <Tab.Screen name='Filmania' options={{
  //             tabBarIcon: ({focused}) => {
  //               return <HomeIcon name="home" size={26} color={focused ? Colors.PrimaryLightColor : Colors.TextColor} />
  //             },
  //             tabBarShowLabel: false,
              
  //           }} 
  //           component={HomeScreen} 
  //           />
  //           <Tab.Screen name='Keşfet' component={ExploreScreen} options={{
  //             tabBarIcon: ({focused}) => {
  //               return <ExploreIcon name="rocket" size={26} color={focused ? Colors.PrimaryLightColor : Colors.TextColor} />
  //             },
  //             tabBarShowLabel: false
  //           }} />
  //           <Tab.Screen name='Listem' component={Saved} options={{
  //             tabBarIcon: ({focused}) => {
  //               return <SavedIcon name='bookmark' size={26} color={focused ? Colors.PrimaryLightColor : Colors.TextColor} />
  //             },
  //             tabBarShowLabel: false
  //           }} />
  //           <Tab.Screen name='Arama' component={Search} options={{
  //             tabBarIcon: ({focused}) => {
  //               return <SearchIcon name='search' size={26} color={focused ? Colors.PrimaryLightColor : Colors.TextColor} />
  //             },
  //             tabBarShowLabel: false
  //           }} />
  //       </Tab.Navigator>
  //      </View>
  // );
}

function DetailScreen({ route }: any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Item ID: {route.params.itemId}</Text>
    </View>
  );
}


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <StatusBar translucent barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <Stack.Navigator initialRouteName={"Main"} screenOptions={{ headerBackTitleVisible: false }}>
                <Stack.Screen name='Main' component={MainScreens} options={{ 
                        title: "Main",
                        headerShown: false
                      }} 
                />
                <Stack.Screen name='Detail' component={DetailScreen} options={{ 
                        title: "Details",
                      }} 
                />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}

const styles = StyleSheet.create({

});

export default App;
