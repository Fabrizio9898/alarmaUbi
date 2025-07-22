import {  StyleSheet } from 'react-native';
import SearchBar from '../../components/SearchBar.component';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
           <SearchBar />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
  },
});