import { StyleSheet } from 'react-native';

export const cores = {
  primaria: '#1E3A8A',
  fundo: '#F3F4F6',
  cartao: '#FFFFFF',
  texto: '#111827',
  textoSuave: '#6B7280',
};

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: cores.texto,
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: cores.textoSuave,
    marginBottom: 16,
  },
  item: {
    backgroundColor: cores.cartao,
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: cores.primaria,
  },
  itemTexto: {
    fontSize: 18,
    color: cores.texto,
  },
  botao: {
    backgroundColor: cores.primaria,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'stretch',
    marginTop: 12,
  },
  botaoSecundario: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: cores.primaria,
  },
  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
