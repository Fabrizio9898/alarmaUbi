import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
// import mbxClient from '@mapbox/mapbox-sdk';
// import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// Configura el cliente de Mapbox
// const mapboxClient = mbxClient({ accessToken: 'pk.TU_TOKEN_PÚBLICO_AQUÍ' });
// const geocodingService = mbxGeocoding(mapboxClient);

export default function SearchBarWithAutocomplete({ onSelectDestination }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();

//   const handleSearch = async (text) => {
//     setQuery(text);
//     if (text.length > 2) {
//       try {
//         const response = await geocodingService
//           .forwardGeocode({
//             query: text,
//             limit: 5,
//             types: ['place', 'address', 'poi'], // Tipos de resultados: lugares, direcciones, puntos de interés
//           })
//           .send();
//         setSuggestions(response.body.features);
//       } catch (error) {
//         console.error('Error fetching suggestions:', error);
//       }
//     } else {
//       setSuggestions([]);
//     }
//   };

//   const handleSelect = (destination) => {
//     onSelectDestination({
//       name: destination.place_name,
//       coordinates: destination.geometry.coordinates,
//     });
//     setQuery('');
//     setSuggestions([]);
//     router.back(); // Vuelve a HomeScreen
//   };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <MaterialCommunityIcons name="magnify" size={24} color="gray" />
        <TextInput
          style={styles.input}
          placeholder="Buscar un lugar..."
          value={query}
        //   onChangeText={handleSearch}
          autoFocus={true} // Enfoca el input al cargar la pantalla
        />
      </View>
      <FlatList
        data={suggestions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.suggestionItem}
            // onPress={() => handleSelect(item)}
          >
            <Text style={styles.suggestionText}>{item.place_name}</Text>
          </TouchableOpacity>
        )}
        style={styles.suggestionsList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  suggestionsList: {
    flex: 1,
  },
  suggestionItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  suggestionText: {
    fontSize: 16,
  },
});