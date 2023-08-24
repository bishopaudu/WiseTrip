import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './screens/OnboardingScreen';
import HomeScreen from './screens/HomeScreen';
import NotificationScreen from './screens/NotificationScreen';
import UserScreen from './screens/UserScreen';
import AuthScreen from './screens/AuthScreen';
import PopularRoutes from './screens/PopularRoutes';
import BookingScreen from './screens/BookingScreen'
import LogisticsScreen from './screens/LogisticsScreen'
import Travel from './screens/Travel'
import CouponScreen from './screens/CouponScreen'


const Stack = createNativeStackNavigator()

export default function Navigation() {
  return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{
              headerShown:false
          }}>
             <Stack.Screen name='Onboarding' component={OnboardingScreen} />
             <Stack.Screen name='Home' component={HomeScreen} />
             <Stack.Screen name='Auth' component={AuthScreen} />
            <Stack.Screen name='Notification' component={NotificationScreen} />
            <Stack.Screen name='User' component={UserScreen} />
            <Stack.Screen name='Routes' component={PopularRoutes}/>
            <Stack.Screen name='Book Ticket' component={BookingScreen}/>
            <Stack.Screen name='Coupons' component={CouponScreen}/>
            <Stack.Screen name='Logistics' component={LogisticsScreen}/>
            <Stack.Screen name='Travel' component={Travel}/>
          </Stack.Navigator>
    </NavigationContainer>
  )
}