import { View,ScrollView,} from 'react-native'
import React from 'react'
import {serviceData} from '../utils/servicedata'
import Servicecard from './Servicecard'

export default function Services() {
 
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {serviceData.map((item) => {
        return (
          <View key={item.id}>
          <Servicecard item={item}/>
          </View>
        )
      })}
    </ScrollView>
  )
}

