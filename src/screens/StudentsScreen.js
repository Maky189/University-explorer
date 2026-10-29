import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import BackButton from '../components/BackButton';
import { estilos } from '../styles';

export default function StudentsScreen({ navigation, route }) {
  const { curso } = route.params;

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Estudantes</Text>
      <Text style={estilos.subtitulo}>Curso de {curso.nome}</Text>

      <FlatList
        data={curso.estudantes}
        keyExtractor={(nome) => nome}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={estilos.item}
            onPress={() =>
              navigation.navigate('Perfil', { nome: item, curso: curso.nome })
            }
          >
            <Text style={estilos.itemTexto}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      <BackButton />
    </View>
  );
}
