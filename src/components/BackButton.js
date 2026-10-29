import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';

import { cores, estilos } from '../styles';

export default function BackButton() {
  const navigation = useNavigation();

  if (!navigation.canGoBack()) {
    return null;
  }

  return (
    <TouchableOpacity
      style={[estilos.botao, estilos.botaoSecundario]}
      onPress={() => navigation.goBack()}
    >
      <Text style={[estilos.botaoTexto, { color: cores.primaria }]}>← Voltar</Text>
    </TouchableOpacity>
  );
}
