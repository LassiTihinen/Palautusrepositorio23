import { StyleSheet, Text, TextInput, View} from 'react-native';
import { useState } from 'react';

/*
Lower: (220-age) * 0.65
Upper: (220-age) * 0.85
*/



export default function App() {
  const [age, setAge] = useState('');

  const lowerHR = parseInt((220 - parseFloat(age)) * 0.65);
  const upperHR = parseInt((220 - parseFloat(age)) * 0.85);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Age</Text>
      <TextInput
        placeholder='Enter your age'
        onChangeText={newText => setAge(newText)}
        keyboardType="numeric"
        value={age}
        style={styles.input}
      />
      <Text style={styles.label}>Hr limits</Text>
      <Text>{lowerHR} - {upperHR}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 14,
  },
  label: {
    fontSize: 20,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'blue',
    borderWidth: 1,
    fontSize: 20,
    textAlign:'left',
    marginBottom: 2,
  },
});