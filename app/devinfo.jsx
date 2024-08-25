import { View, Text, Linking, TouchableOpacity, Image, ScrollView} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const devinfo = () => {

  const handleEmail = () => {
    Linking.openURL('mailto:adithyaps929@gmail.com?subject=appreciation')
  }

  const handleGit = () => {
    Linking.openURL('https://github.com/adithya1770')
  }
  
  const handleReddit = () => {
    Linking.openURL('https://www.reddit.com/user/Interesting-Cold-167/')
  }
  return (
    <ScrollView>
      <View>
        <StatusBar hidden={true}/>
      <Text className='text-8xl ml-4 text-red-600' style={{ fontFamily: 'Text2'}}>hey anon! welcome to dev info!</Text>
      <Text className='text-white text-4xl mt-12 ml-10' style={{ fontFamily: 'Text2'}}>did you like the app? if yes click here to send appreciation to adithyaps!</Text>
      <TouchableOpacity onPress={handleEmail}>
        <Text className='text-white text-6xl mt-14 ml-28' style={{ fontFamily: 'Text2'}}>mail me!</Text>
      </TouchableOpacity>
      <Text className='text-white text-xl ml-28' style={{ fontFamily: 'Text2'}}>click above to send mail!</Text>
      <View className='flex-row items-center justify-center mt-32'>
        <TouchableOpacity  onPress={handleGit}>
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCpBlPuklOH1vMTri9xnXCUE2HtlJf10wEJg&s'}} height={50} width={50} className='rounded-xl'/>
        </TouchableOpacity>
        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png'}} height={50} width={50} className='rounded-xl'/>
        <TouchableOpacity  onPress={handleReddit}>
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQpszlLG_MKP8ELoFgSr-8qa1029opClLw1g&s'}} height={50} width={50} className='rounded-xl'/>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  )
}

export default devinfo