import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//View => UIView
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welocme to Native apps!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
