import {View,StyleSheet,Text,Pressable,TouchableOpacity,ScrollView} from 'react-native'
import CarouselScreen from '../components/CarouselScreen'
import { useNavigation } from '@react-navigation/native';
import PopularDestination from '../components/PopularDestination';
import Services from '../components/Services';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function HomeScreen() {
    const navigation = useNavigation();

    const routeNav =() => {
      navigation.navigate('Routes')
    }
  
    const userNav = () => {
      navigation.navigate('Auth');
    };
  
    const notificationNav = () => {
      navigation.navigate('Notification');
    };
  
    return (
      <ScrollView showVerticalScrollIndicator={false} style={{flex:1,backgroundColor:'#fff'}}>
        <View style={styles.container}>
          <Pressable style={styles.iconsStyle} onPress={userNav}>
            <AntDesign name="user" size={30} color="black" />
          </Pressable>
          <Text style={styles.logoText}>WiseTrips</Text>
          <Pressable style={styles.iconsStyle} onPress={notificationNav}>
          <AntDesign name="customerservice" size={30} color="black" />
          </Pressable>
        </View>
        <CarouselScreen />
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Our Services</Text>
            <TouchableOpacity>
              <Text style={styles.seeMore}>See More</Text>
            </TouchableOpacity>
          </View>
          <Services />
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.topRoutesTitle}>Top Available Routes</Text>
        <TouchableOpacity onPress={() => { routeNav(); console.log('touched'); }}>
        <Text style={[styles.topRoutesTitle,{marginRight:10}]}>View Routes</Text>
        </TouchableOpacity>
        </View>
        <PopularDestination />
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-between",
        marginBottom:20,
        //backgroundColor:'#fff'
    },
    iconsStyle:{
        //backgroundColor:'gray',
        padding:10,
        borderRadius:30,
    },
       
    logoText: {
      fontWeight: 'bold',
      letterSpacing: 2,
      fontSize: 30,
    },
  
    sectionContainer: {
      marginTop: 10,
    },
  
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
      marginLeft:10
    },
  
    sectionTitle: {
      fontSize: 20,
    },
  
    seeMore: {
      fontSize: 20,
      marginRight: 10,
    },
  
    topRoutesTitle: {
      marginTop: 10,
      marginLeft: 10,
      fontWeight: '500',
      fontSize: 18,
      marginBottom:10
    },
  });
  