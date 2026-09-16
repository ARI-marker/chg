import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const profile = {
  name: 'Ari',
  surname: 'Sheqiri',
  birthday: '10/10/2010',
};

const hobbies = [
  { id: '1', name: 'Gaming' },
  { id: '2', name: 'Traveling' },
  { id: '3', name: 'Programming' },
];

export default function App() {
  return (
    <View style={style.container}>

      <Text style={style.title}>Personal Profile</Text>

      <View style={style.info}>
        <Text style={style.text}>Emri: {profile.name}</Text>
        <Text style={style.text}>Mbiemri: {profile.surname}</Text>
        <Text style={style.text}>Ditelinjda: {profile.birthday}</Text>
      </View>

      <Text style={style.subtitle}>Hobbies</Text>

      <FlatList
        data={hobbies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={style.hobby}>
            <Text style={style.hobbyText}>{item.name}</Text>
          </View>
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f7',
    padding: 20,
    paddingTop: 60,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 25,
  },

  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#222',
  },

  info: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },

  text: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },

  hobby: {
    backgroundColor: '#4f46e5',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },

  hobbyText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});


