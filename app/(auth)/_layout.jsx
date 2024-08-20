import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

const Layout = ({ children }) => {
  return (
    <View style={{ flex: 1 }}>
      {children}
      <StatusBar backgroundColor='#161622' style='light' />
    </View>
  );
};

const AuthLayout = () => {
  return (
    <Layout>
      <Stack>
        <Stack.Screen name='sign-in' options={{ headerShown: false }} />
        <Stack.Screen name='sign-up' options={{ headerShown: false }} />
      </Stack>
    </Layout>
  );
};

export default AuthLayout;