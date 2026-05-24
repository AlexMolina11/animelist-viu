import { useLocalSearchParams, useRouter } from 'expo-router';

import { Alert, StyleSheet, Text, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

 
 

import AnimeForm from '../../components/AnimeForm';

import { useAnimes } from '../../hooks/useAnimes';

import { colors } from '../../styles/colors';

import { AnimeFormData } from '../../types/anime';

 
 

export default function EditAnimeScreen() { 

  const router = useRouter(); 

  const { id } = useLocalSearchParams(); 

  const { findAnimeById, editAnime } = useAnimes(); 

 
 

  const animeId = Number(id); 

  const anime = findAnimeById(animeId); 

 
 

  if (!anime) { 

    return ( 

      <SafeAreaView style={styles.centerContainer}> 

        <Text style={styles.errorText}> 

          No se encontró el anime seleccionado. 

        </Text> 

      </SafeAreaView> 

    ); 

  } 

 
 

  const initialValues: AnimeFormData = { 

    title: anime.title, 

    genre: anime.genre, 

    episodes: anime.episodes.toString(), 

    rating: anime.rating.toString(), 

    status: anime.status, 

    description: anime.description, 

  }; 

 
 

  const handleUpdateAnime = (animeData: AnimeFormData) => { 

    editAnime(animeId, animeData); 

 
 

    Alert.alert('Éxito', 'Anime actualizado correctamente'); 

 
 

    router.back(); 

  }; 

 
 

  return ( 

    <SafeAreaView style={styles.container}> 

      <View style={styles.header}> 

        <Text style={styles.tag}>MODO EDICIÓN</Text> 

        <Text style={styles.screenTitle}>Editar anime</Text> 

        <Text style={styles.subtitle}> 

          Actualiza la información guardada en SQLite. 

        </Text> 

      </View> 

 
 

      <AnimeForm 

        initialValues={initialValues} 

        buttonTitle="Actualizar anime" 

        onSubmit={handleUpdateAnime} 

      /> 

    </SafeAreaView> 

  ); 

} 

 
 

const styles = StyleSheet.create({ 

  container: { 

    flex: 1, 

    backgroundColor: colors.background, 

  }, 

  header: { 

    paddingHorizontal: 20, 

    paddingTop: 10, 

    paddingBottom: 4, 

  }, 

  tag: { 

    color: colors.accent, 

    fontSize: 12, 

    fontWeight: '900', 

    letterSpacing: 1, 

    marginBottom: 6, 

  }, 

  screenTitle: { 

    fontSize: 28, 

    fontWeight: '900', 

    color: colors.textPrimary, 

  }, 

  subtitle: { 

    marginTop: 6, 

    color: colors.textSecondary, 

    fontSize: 15, 

  }, 

  centerContainer: { 

    flex: 1, 

    justifyContent: 'center', 

    alignItems: 'center', 

    padding: 24, 

    backgroundColor: colors.background, 

  }, 

  errorText: { 

    fontSize: 17, 

    color: colors.danger, 

    textAlign: 'center', 

    fontWeight: '800', 

  }, 

}); 

 