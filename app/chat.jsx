import { View, Text, TextInput, TouchableOpacity, ScrollView, ImageBackground, Image } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { supabase } from './lib/supabase'
import array_pfp from './pfp_data.json';

const Chat = () => {
  const array_pfp_chosen = array_pfp[Math.floor(Math.random() * array_pfp.length)];
  const [msg, setMsg] = useState('');
  const [payload, setPayload] = useState([]);
  const [user, setUser] = useState('');
  const [roomid, setRoomId] = useState();
  const textRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);
  const [baseText, setBaseText] = useState(false);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.focus();
    }
  }, []);

  const handleFocus = () => {
    setIsTyping(true);
    setBaseText(false);
  }

  const handleFocus1 = () => {
    setBaseText(true);
    setIsTyping(false);
  }

  const handleBlur = () => {
    setIsTyping(false);
    setBaseText(false);
  } 
  
  const handleInserts = async () => {
    let { data, error } = await supabase
    .from('rlt')
    .select('*')
    .eq('room_id', roomid);
    setPayload(data);
  }


  useEffect(() => {
    if (roomid) {
      const subscription = supabase
        .channel('rlt')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'rlt', filter: `room_id=eq.${roomid}` }, handleInserts)
        .subscribe();
    }
  }, [roomid]);

  const insertRow = async () => {
    const { data, error } = await supabase.from('rlt').insert([{ msg: msg, username: user, room_id: roomid},])
    refreshRow();
  }

  const refreshRow = async () => {
      if (!roomid) return;
      const { data, error } = await supabase
        .from('rlt')
        .select('*')
        .eq('room_id', roomid);
    
      if (error) {
        console.error('Error fetching messages:', error);
      } else {
        setPayload(data);
      }
    };


  return (
    <SafeAreaView>
        <View>
            <Text className="text-white text-6xl mt-14 ml-10" style={{ fontFamily: 'Text'}}>chatroom</Text>
            <Text className="text-white text-xl mt-14 ml-10" style={{ fontFamily: 'Text'}}>Be responsible and mind your language.</Text>
            <TextInput className="bg-white h-12 mb-4 p-2 w-80 ml-9 rounded mt-10" ref={textRef} onFocus={handleFocus1} onBlur={handleBlur} style={{ fontFamily: 'Text'}} placeholder='enter your anon username!' value={user} required onChangeText={setUser}/>
            <TextInput className="bg-white h-12 mb-4 p-2 w-80 ml-9 rounded" ref={textRef} onFocus={handleFocus} onBlur={handleBlur}  style={{ fontFamily: 'Text'}} placeholder='enter your message!' value={msg} onChangeText={setMsg}/>
            <TextInput className="bg-white h-12 mb-4 p-2 w-80 ml-9 rounded" ref={textRef} onFocus={handleFocus1} onBlur={handleBlur} style={{ fontFamily: 'Text'}} placeholder='enter your room id (integers only)!' value={roomid} onChangeText={setRoomId}/>
            <View className='flex-row justify-center align-middle'>
            <TouchableOpacity>
              <Text className='text-white text-2xl ml-1' style={{ fontFamily: 'Text'}} onPress={insertRow}>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className='text-white text-2xl ml-10' style={{ fontFamily: 'Text'}} onPress={refreshRow}>Refresh</Text>
            </TouchableOpacity>
            </View>
            <ScrollView className="h-64 w-82 rounded-xl ml-1 mt-4 overflow-scroll-y border-2 border-cyan-400">
            {isTyping && <Text className="text-purple-500 ml-4 text-2xl" style={{ fontFamily: 'Text2'}}>typing...</Text>}
            {baseText && <Text className="text-purple-500 text-2xl ml-4" style={{ fontFamily: 'Text2'}}>start chatting!</Text> }
              {payload.map((item, index) => (  
                  <Text key={index} className='text-white text-3xl ml-3 mt-2 mb-4' style={{ fontFamily: 'Text2' }}>
                      <Image source={{uri : array_pfp_chosen }} width={40} height={40} className='rounded-3xl'/>
                      <Text className="text-cyan-500 ml-4">{item.username}</Text> : <Text className="text-white">{item.msg}</Text>
                  </Text>
              ))}
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}

export default Chat