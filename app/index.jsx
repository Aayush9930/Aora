import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import "../global.css";



const index = () => {
  return (
    <View className='flex-1 items-center justify-center bg-green-100'>
      <Text className='text-3xl'>Hello</Text>
      <Link href = '/home'>Go to Home</Link>
    </View>
  )
}

export default index
