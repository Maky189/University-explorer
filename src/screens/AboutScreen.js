import { Text, View } from 'react-native';

import BackButton from '../components/BackButton';
import { estilos } from '../styles';

export default function AboutScreen() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Sobre</Text>
      <Text style={estilos.subtitulo}>
        O Universidade Explorer é uma mini aplicação desenvolvida na Aula 05 de
        Dispositivos Móveis para praticar navegação em React Native.
      </Text>
      <Text style={estilos.subtitulo}>
        Utiliza Stack Navigation para navegar entre cursos, estudantes e perfis,
        e Bottom Tab Navigation para alternar entre as abas Início e Sobre. Os
        dados são passados entre telas com navigation.navigate() e lidos com
        route.params.
      </Text>

      <BackButton />
    </View>
  );
}
