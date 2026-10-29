import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import { cursos } from '../data/cursos';
import { estilos } from '../styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Cursos</Text>
      <Text style={estilos.subtitulo}>Toque num curso para ver os detalhes</Text>

      <FlatList
        data={cursos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={estilos.item}
            onPress={() => navigation.navigate('Curso', { curso: item })}
          >
            <Text style={estilos.itemTexto}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
