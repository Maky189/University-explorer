import { Text, TouchableOpacity, View } from 'react-native';

import { estilos } from '../styles';

export default function CourseScreen({ route }) {
  const { curso } = route.params;

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>{curso.nome}</Text>
      <Text style={estilos.subtitulo}>{curso.descricao}</Text>

      <TouchableOpacity style={estilos.botao}>
        <Text style={estilos.botaoTexto}>Ver Estudantes</Text>
      </TouchableOpacity>
    </View>
  );
}
