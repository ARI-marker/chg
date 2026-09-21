import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';

const students = [
  {
    name: 'Gerti',
    surname: 'Gashi',
    age: '13',
  },
  {
    name: 'Art',
    surname: 'Gashi',
    age: '15',
  },
  {
    name: 'Geni',
    surname: 'Gashi',
    age: '14',
  },
];

export default function ListScreen() {
  return (
    <FlatList
      data={students}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <View style={styles.student}>

          <Text style={styles.studentText}>
            Emri: {item.name}
          </Text>

          <Text style={styles.studentText}>
            Mbiemri: {item.surname}
          </Text>

          <Text style={styles.studentText}>
            Mosha: {item.age}
          </Text>

        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  student: {
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

  studentText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 3,
  },
});

