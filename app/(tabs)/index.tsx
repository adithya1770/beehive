import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, StatusBar, Image} from 'react-native';
import { Link } from 'expo-router';
import { supabase } from '../lib/supabase';

const Index = () => {

  return (
    <View className="flex-1 justify-center items-center bg-black mt-28">
      <View className="flex-row space-x-4 mb-2 h-18 w-72 bg-white rounded-full border-2 border-red-500">
          <Text className='text-3xl ml-14' style={{fontFamily: 'Text2'}}>anon chat room</Text>
      </View>
      <StatusBar backgroundColor="#000000" barStyle="dark-content" />
      <Text className="text-white text-7xl mt-32" style={{fontFamily:'Heading'}}>BeeHive</Text>
      <Text className="text-white text-4xl mt-2 ml-6" style={{fontFamily:'Text'}}>Chat anonymously with everyone!</Text>
      <View className="flex-1 justify-center items-center bg-black p-4">
      <View className="flex-row space-x-4 mb-2 h-18 w-72 bg-white rounded-full">
        <TouchableOpacity className="py-3 px-2 ml-2">
          <Link href='/login'><Text className="text-red-600 text-3xl ml-20" style={{ fontFamily: 'Text' }}>Log in</Text></Link>
        </TouchableOpacity>
        <TouchableOpacity className="py-3 px-6">
          <Link href='/signup'><Text className="text-red-600 text-3xl ml-20" style={{ fontFamily: 'Text' }}>Sign up</Text></Link>
        </TouchableOpacity>
        <Text className='text-white absolute top-16 left-1 text-xl' style={{fontFamily: 'Text2'}}>If you are a new user <Text className='font-extrabold'>sign up</Text> first</Text>
      </View>
    </View>
    <Link href='./devinfo'>
    <View className='bg-white rounded-full border-4 border-white'>
        <Image source={{uri: 'https://static.thenounproject.com/png/258817-200.png'}} width={70} height={70}/>
    </View>
    </Link>
    </View>
  );
};

export default Index;
