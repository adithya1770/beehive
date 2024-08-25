import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

const Signup = () => {
  const [userName, setUser] = useState('');  
  const [passWord, setPass] = useState('');  
  const [message, setMessage] = useState('');

  const signFunc = async () => {
    const { error } = await supabase.auth.signUp({email: userName,password: passWord});
    if (error) {
      setMessage("Couldn't sign up: " + error.message);
    } else {
      setMessage("Success");
    }

    const { err } = await supabase.from('users').insert([{ username: userName, password: passWord},]).select()
  };

  return (
    <View className="flex-1 justify-center items-center p-4">
      <Text className="text-6xl text-white mb-32" style={{ fontFamily: 'Text'}}>Become a member.</Text>
      <TextInput
        placeholder="Username or Email"
        className="bg-white p-2 rounded mb-4 w-full"
        onChangeText={setUser}
        value={userName}
        style={{fontFamily: 'Text'}}
      />
      <TextInput
        placeholder="Password"
        className="bg-white p-2 rounded mb-4 w-full"
        onChangeText={setPass}
        value={passWord}
        secureTextEntry
        style={{fontFamily: 'Text'}}
      />
      <TouchableOpacity className="p-4 rounded h-16 w-32 bg-white" onPress={signFunc}>
        <Text className="text-black text-2xl" style={{fontFamily: 'Text'}}>Sign Up</Text>
      </TouchableOpacity>
      {message ? <Text className="text-green-500 mt-6 text-5xl" style={{fontFamily: 'Text2'}}>{message}</Text> : null}
    </View>
  );
};

export default Signup;
