import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListScreen from './ListScreen';

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
    <View style={styles.container}>

      {/* Profile */}
      <Text style={styles.title}>Personal Profile</Text>

      <View style={styles.info}>
        <Text style={styles.text}>
          Emri: {profile.name}
        </Text>

        <Text style={styles.text}>
          Mbiemri: {profile.surname}
        </Text>

        <Text style={styles.text}>
          Ditëlindja: {profile.birthday}
        </Text>
      </View>

      {/* Hobbies */}
      <Text style={styles.subtitle}>Hobbies</Text>

      {hobbies.map((item) => (
        <View key={item.id} style={styles.hobby}>
          <Text style={styles.hobbyText}>
            {item.name}
          </Text>
        </View>
      ))}

      {/* Students */}
      <Text style={styles.subtitle}>Students</Text>

      <ListScreen />

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
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
    marginTop: 10,
    color: '#222',
  },

  info: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,

    elevation: 3,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
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
    width: '100%',

    elevation: 3,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },

  hobbyText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});


