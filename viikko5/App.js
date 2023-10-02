import { StatusBar } from 'expo-status-bar';
import { FlatList, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import  Constants  from 'expo-constants';
import { DATA } from './Data';
import Row from './components/Row'


export default function App() {

  return (
   <SafeAreaView style={styles.container}>
      <FlatList
      data={DATA}
      renderItem= {({item})=>(
        <Row person={item}></Row>
      )}
      ></FlatList>
      <StatusBar style="auto"></StatusBar>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'start',
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    paddingLeft: 4,
  },
});


/* normaali renderöinti App:in Flatlistin alle renderItem={renderItem}
  function renderItem({item}){
  return (<Text>{item.lastname}</Text>)
}
*/

/*
  const renderItem = ({item}) =>(
    <Text>{item.lastname}</Text>
  );
*/

/* renderItem "inline" syntax inside FlatList
return (
   <SafeAreaView style={styles.container}>
      <FlatList
      data={DATA}
      renderItem= {({item}) => (
        <Text>{item.lastname}</Text>
      )}
      ></FlatList>
   </SafeAreaView>
  );
*/