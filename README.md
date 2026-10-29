# Universidade Explorer

Mini aplicação em React Native (Expo) desenvolvida para a **Aula 05 de Dispositivos Móveis** — *Explorando Navegação em React Native*.

O app permite navegar entre cursos, estudantes e perfis, passando dados entre telas com `navigation.navigate()` e lendo-os com `route.params`.

## Telas

| Tela | Descrição |
| --- | --- |
| **HomeScreen** | Lista de cursos (Engenharia, Informática, Medicina, Direito). Ao tocar num curso, abre os detalhes. |
| **CourseScreen** | Nome e descrição do curso, com botão **Ver Estudantes**. |
| **StudentsScreen** | Lista de estudantes do curso. Ao tocar num estudante, abre o perfil. |
| **ProfileScreen** | Mostra o nome do estudante recebido como parâmetro. |
| **AboutScreen** | Aba **Sobre** com informações do app. |

### Extras implementados

- Bottom Tab Navigation entre **Início** e **Sobre**.
- Botão **← Voltar** em cada tela (além do botão do cabeçalho).

## Navegação

```
Tab.Navigator
├── Início  → Stack.Navigator
│             Home → Curso → Estudantes → Perfil
└── Sobre
```

Exemplo de passagem de parâmetros:

```js
// HomeScreen
navigation.navigate('Curso', { curso: item });

// CourseScreen
const { curso } = route.params;
```

## Tecnologias

- Expo SDK 58 / React Native 0.88
- `@react-navigation/native`
- `@react-navigation/stack`
- `@react-navigation/bottom-tabs`

## Como executar

Requisito: [Node.js](https://nodejs.org/) LTS (20 ou superior).

```bash
git clone https://github.com/Maky189/University-explorer.git
cd University-explorer
npm install
npx expo start
```

Depois que o servidor iniciar:

- **Telemóvel:** instale o app **Expo Go** e leia o QR code que aparece no terminal.
- **Android (emulador):** pressione `a`.
- **iOS (simulador, macOS):** pressione `i`.
- **Navegador:** pressione `w` ou abra http://localhost:8081.
