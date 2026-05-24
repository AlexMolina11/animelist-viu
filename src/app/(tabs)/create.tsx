import { useRouter } from 'expo-router';

import { Alert, StyleSheet, Text, View } from 'react-native';

 
 

import AnimeForm from '../../components/AnimeForm';

import { useAnimes } from '../../hooks/useAnimes';

import { colors } from '../../styles/colors';

import { AnimeFormData } from '../../types/anime';

 
 

export default function CreateAnimeScreen() { 

  const router = useRouter(); 

  const { addAnime } = useAnimes(); 

 
 

  const handleCreateAnime = (animeData: AnimeFormData) => { 

    addAnime(animeData); 

 
 

    Alert.alert('Éxito', 'Anime creado correctamente'); 

 
 

    router.replace({ 

      pathname: '/(tabs)', 

    } as never); 

  }; 

 
 

  return ( 

    <View style={styles.container}> 

      <View style={styles.header}> 

        <Text style={styles.tag}>NUEVO REGISTRO</Text> 

        <Text style={styles.title}>Crear anime</Text> 

        <Text style={styles.subtitle}> 

          Agrega un anime a tu colección local. 

        </Text> 

      </View> 

 
 

      <AnimeForm 

        buttonTitle="Guardar anime" 

        onSubmit={handleCreateAnime} 

      /> 

    </View> 

  ); 

} 

 
 

const styles = StyleSheet.create({ 

  container: { 

    flex: 1, 

    backgroundColor: colors.background, 

  }, 

  header: { 

    paddingHorizontal: 18, 

    paddingTop: 18, 

    paddingBottom: 4, 

  }, 

  tag: { 

    color: colors.accent, 

    fontSize: 12, 

    fontWeight: '900', 

    letterSpacing: 1, 

    marginBottom: 6, 

  }, 

  title: { 

    fontSize: 28, 

    fontWeight: '900', 

    color: colors.textPrimary, 

  }, 

  subtitle: { 

    marginTop: 6, 

    color: colors.textSecondary, 

    fontSize: 15, 

  }, 

}); 