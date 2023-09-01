import React from 'react'
import { useEffect,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './screens/OnboardingScreen';
//import HomeScreen from './screens/HomeScreen';
import NotificationScreen from './screens/NotificationScreen';
import UserScreen from './screens/UserScreen';
import AuthScreen from './screens/AuthScreen';
import Routes from './screens/Routes'
import BookingScreen from './screens/BookingScreen'
import LogisticsScreen from './screens/LogisticsScreen'
import Travel from './screens/Travel'
import CouponScreen from './screens/CouponScreen'
import HomeBottomNavStack from './HomeBottomNavStack';
import AsyncStorage from '@react-native-async-storage/async-storage'


const Stack = createNativeStackNavigator()

export default function Navigation() {
  const[showOnboarding,setShowOnboarding] = useState(null)
  const checkOnboarded =async() => {
    try {
      const storedValue = await AsyncStorage.getItem('onboarding');
      if (storedValue == 'done') {
        console.log('Retrieved string:', storedValue);
        setShowOnboarding(false)
      } else {
        setShowOnboarding(true)
        console.log('No data found with the specified key.');
      }
    } catch (error) {
      console.error('Error retrieving string:', error);
    }
  };
  useEffect(() => {
    checkOnboarded()
  },[])
  if(showOnboarding) {
    return (
      <NavigationContainer>
            <Stack.Navigator screenOptions={{
              headerShown:false
            }}>
              <Stack.Screen name='Onboarding' component={OnboardingScreen} />
              </Stack.Navigator>
       </NavigationContainer>
    )

  } else {
    return (
      <NavigationContainer>
      <Stack.Navigator screenOptions={{
              headerShown:false }}>
           <Stack.Screen name='Homestack' component={HomeBottomNavStack} />
             <Stack.Screen name='Auth' component={AuthScreen} />
            <Stack.Screen name='Notification' component={NotificationScreen} />
            <Stack.Screen name='User' component={UserScreen} />
            <Stack.Screen name='Routes' component={Routes}/>
            <Stack.Screen name='Book Ticket' component={BookingScreen}/>
            <Stack.Screen name='Coupons' component={CouponScreen}/>
            <Stack.Screen name='Logistics' component={LogisticsScreen}/>
            <Stack.Screen name='Travel' component={Travel}/>

      </Stack.Navigator>
      </NavigationContainer>

    )
  }
  




      {/*<NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Onboarding' component={OnboardingScreen} />
             <Stack.Screen name='Home' component={HomeScreen} />
             <Stack.Screen name='Auth' component={AuthScreen} />
            <Stack.Screen name='Notification' component={NotificationScreen} />
            <Stack.Screen name='User' component={UserScreen} />
            <Stack.Screen name='Routes' component={Routes}/>
            <Stack.Screen name='Book Ticket' component={BookingScreen}/>
            <Stack.Screen name='Coupons' component={CouponScreen}/>
            <Stack.Screen name='Logistics' component={LogisticsScreen}/>
            <Stack.Screen name='Travel' component={Travel}/>
          </Stack.Navigator>
  </NavigationContainer>*/}
  
}