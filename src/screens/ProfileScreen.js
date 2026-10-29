import { StyleSheet, Text, View } from 'react-native';

import { cores, estilos } from '../styles';

export default function ProfileScreen({ route }) {
  const { nome, curso } = route.params;

  return (
    <View style={[estilos.container, styles.centro]}>
      <View style={styles.avatar}>
        <Text style={styles.inicial}>{nome.charAt(0)}</Text>
      </View>
      <Text style={estilos.titulo}>{nome}</Text>
      <Text style={estilos.subtitulo}>Estudante de {curso}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  centro: {
    alignItems: 'center',
    paddingTop: 40,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: cores.primaria,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  inicial: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: 'bold',
  },
});
