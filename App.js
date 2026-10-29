import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import CourseScreen from './src/screens/CourseScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import StudentsScreen from './src/screens/StudentsScreen';
import { cores } from './src/styles';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: cores.primaria },
            headerTintColor: '#FFFFFF',
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Universidade Explorer' }}
          />
          <Stack.Screen
            name="Curso"
            component={CourseScreen}
            options={({ route }) => ({ title: route.params.curso.nome })}
          />
          <Stack.Screen name="Estudantes" component={StudentsScreen} />
          <Stack.Screen
            name="Perfil"
            component={ProfileScreen}
            options={({ route }) => ({ title: route.params.nome })}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </GestureHandlerRootView>
  );
}
