import { Text, TouchableOpacity, View } from 'react-native';

import BackButton from '../components/BackButton';
import { estilos } from '../styles';

export default function CourseScreen({ navigation, route }) {
  const { curso } = route.params;

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>{curso.nome}</Text>
      <Text style={estilos.subtitulo}>{curso.descricao}</Text>

      <TouchableOpacity
        style={estilos.botao}
        onPress={() => navigation.navigate('Estudantes', { curso })}
      >
        <Text style={estilos.botaoTexto}>Ver Estudantes</Text>
      </TouchableOpacity>

      <BackButton />
    </View>
  );
}
