import { View, Text } from 'react-native'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="signup" options={{ headerShown : false}} />
        <Stack.Screen name="login" options={{ headerShown : false}} />
    </Stack>
  )
}

export default AuthLayout