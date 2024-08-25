import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase';
import { useNavigation } from 'expo-router';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [err, setErr] = useState('');
    const [next, setNext] = useState(false);
    const navigation = useNavigation();
    const Login = async () => {
        let { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        });
        if(!error){
            setErr("Login Successful");
            navigation.navigate('chat');
            setNext(true);
        }
        else{
            setErr("Login failed: " + error.message);
        }
    }
  return (
    <View className="flex-1 justify-center items-center p-4">
        <Text className="text-6xl text-white mb-32" style={{ fontFamily: 'Text'}}>Join the madness!</Text>
        <TextInput className="bg-white h-12 mb-4 p-2 w-full rounded" style={{fontFamily: "Text"}} placeholder='Username or Email' onChangeText={setEmail} value={email}/>
        <TextInput className="bg-white h-12 mb-4 p-2 w-full rounded" style={{fontFamily: "Text"}} placeholder='Password' secureTextEntry onChangeText={setPass} value={password}/>
        <TouchableOpacity>
                <Text className="text-black text-2xl p-4 rounded h-16 w-28 bg-white" style={{fontFamily: "Text"}} onPress={Login}>Log in</Text>
        </TouchableOpacity>
        <Text className="text-green-600 text-4xl mt-10" style={{fontFamily: "Text2"}} >{err}</Text>
    </View>
  )
}

export default Login