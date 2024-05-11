// [External]
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Explore from './src/assets/Kesfet.svg';
import Portal from './src/assets/PORTAL.svg';
import Joined from './src/assets/Katıldıklarım.svg';


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
import ExploreScreen from './src/pages/explore';
import DetailScreen from './src/pages/details';

const MainScreens = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{ 
      headerShown: false,
      tabBarStyle: styles.tabBarStyle
      }}>
      <Tab.Screen name='KEŞFET' options={{
        tabBarIcon: ({focused}) => {
          return <Explore width={26} height={26} opacity={focused ? 1 : 0.3} />;
        },
        tabBarActiveTintColor: "#1D1E1C",
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarItemStyle: styles.tabBarItemStyle
      }} component={ExploreScreen} />
      <Tab.Screen name=" " options={{
        tabBarIcon: ({focused}) => {
          return <Portal />;
        },
        tabBarIconStyle: { marginTop: 6}
        }}  component={ExploreScreen} />
      <Tab.Screen name='DAHA CÜZDAN' component={ExploreScreen} options={{
        tabBarIcon: ({focused}) => {
          return <Joined width={26} height={26} opacity={focused ? 1 : 0.3} />;
        },
        tabBarActiveTintColor: "#1D1E1C",
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarItemStyle: styles.tabBarItemStyle
      }} />
    </Tab.Navigator>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={styles.rootView}>
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
                        headerShown: false
                      }}
                />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
  },
  tabBarStyle: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1.5, 
    borderColor: '#ECEEEF',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 10,
  },
  tabBarLabelStyle: {
    fontWeight: 700,
    fontSize: 10, 
    lineHeight: 11.5, 
    letterSpacing: 0.5
  },
  tabBarItemStyle: {
    marginRight: 6,
    marginTop: 6,
    height: 50
  }
});

export default App;
