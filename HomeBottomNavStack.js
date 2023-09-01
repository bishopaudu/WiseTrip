import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tickets from './screens/Tickets'
import Settings from './screens/Settings'
import HomeScreen from  './screens/HomeScreen'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import{Text} from 'react-native'

const Tab = createBottomTabNavigator();

export default function HomeBottomNavStack() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false
    }}>
      <Tab.Screen options={{
        tabBarLabel:({focused})=> (<Text style={{color:focused ? 'gray': 'blue'}}>Home</Text>),
        tabBarIcon:({focused}) => <AntDesign name="home" size={24} color={focused ? 'gray': 'blue'} />
      }} name="Home" component={HomeScreen} />
      <Tab.Screen name="Ticket" component={Tickets} options={{
        tabBarLabel:({focused}) => (<Text style={{color:focused ? 'gray': 'blue'}}>Ticket</Text>),
        tabBarIcon:({focused}) => <Entypo name="ticket" size={24} color={focused ? 'gray': 'blue'} />
      }}/>
      <Tab.Screen name="Profile" component={Settings} options={{
        tabBarLabel:({focused}) => (<Text style={{color:focused ? 'gray': 'blue'}} >Profile</Text>),
        tabBarIcon:({focused}) => <Feather name="settings" size={24} color={focused ? 'gray': 'blue'} />
      }}/>
    </Tab.Navigator>
  );
}