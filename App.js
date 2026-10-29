import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import AboutScreen from './src/screens/AboutScreen';
import CourseScreen from './src/screens/CourseScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import StudentsScreen from './src/screens/StudentsScreen';
import { cores } from './src/styles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const opcoesCabecalho = {
  headerStyle: { backgroundColor: cores.primaria },
  headerTintColor: '#FFFFFF',
};

function InicioStack() {
  return (
    <Stack.Navigator screenOptions={opcoesCabecalho}>
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
  );
}

function icone(emoji) {
  return ({ focused }) => (
    <Text style={{ fontSize: 20, opacity: focused ? 1 : 0.5 }}>{emoji}</Text>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          backBehavior="history"
          screenOptions={{
            tabBarActiveTintColor: cores.primaria,
            tabBarInactiveTintColor: cores.textoSuave,
          }}
        >
          <Tab.Screen
            name="Inicio"
            component={InicioStack}
            options={{ title: 'Início', headerShown: false, tabBarIcon: icone('🏫') }}
          />
          <Tab.Screen
            name="Sobre"
            component={AboutScreen}
            options={{ ...opcoesCabecalho, tabBarIcon: icone('ℹ️') }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </GestureHandlerRootView>
  );
}
