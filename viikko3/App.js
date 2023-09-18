import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text} from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Statusbar katsottu läpi!</Text>
      <StatusBar style="light" 
      backgroundColor='teal'
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingtop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
