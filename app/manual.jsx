import { View, Text, FlatList } from 'react-native'
import React from 'react'

const manual = () => {
    
    const manualData = [
        {id: '1', content: 'Click on signup if you are a new user!'},
        {id: '2', content: 'Enter your credentials and click on signup button.'},
        {id: '3', content: 'Check your email used in signup and click on confirm email.'},
        {id: '4', content: 'Done. Now log in and start chatting!'}
    ]

    const renderText = ({item}) => {
        return (
            <View>
                <Text className='text-white text-3xl mt-20' style={{ fontFamily: 'Text2'}}>{item.content}</Text>
            </View>
        )
    }

  return (
    <View>
        <Text className='text-white text-9xl mt-10 bg-red-600' style={{ fontFamily: 'Text2'}}>manual</Text>
        <FlatList data={manualData} renderItem={renderText} keyExtractor={item => item.id}/>
    </View>
  )
}

export default manual