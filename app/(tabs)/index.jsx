import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../../components/SearchBar.component';
// import Map from '../../components/MapView.component';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* <Map /> */}
    
      <SafeAreaView style={styles.safeOverlay} edges={['top']}>
        <SearchBar />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  safeOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1, 
    paddingHorizontal: 16,
  },
});
