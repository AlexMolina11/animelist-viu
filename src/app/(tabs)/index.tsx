import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback } from 'react';

import {
  Alert,

  FlatList,

  StyleSheet,

  Text,

  View,
} from 'react-native';

 
 

import AnimeCard from '../../components/AnimeCard';

import { useAnimes } from '../../hooks/useAnimes';

import { colors } from '../../styles/colors';

 
 

export default function AnimeListScreen() { 

  const router = useRouter(); 

 
 

  const {
    animes,
    loading,
    removeAnime,
    loadAnimes,
  } = useAnimes();

  useFocusEffect(
    useCallback(() => {
      loadAnimes();
    }, [])
  );

 
 

  const handleDeleteAnime = (id: number) => { 

    Alert.alert( 

      'Eliminar anime', 

      '¿Deseas eliminar este anime?', 

      [ 

        { 

          text: 'Cancelar', 

          style: 'cancel', 

        }, 

        { 

          text: 'Eliminar', 

          style: 'destructive', 

          onPress: () => removeAnime(id), 

        }, 

      ] 

    ); 

  }; 

 
 

  if (loading) { 

    return ( 

      <View style={styles.centerContainer}> 

        <Text style={styles.loadingText}> 

          Cargando animes... 

        </Text> 

      </View> 

    ); 

  } 

 
 

  return ( 

    <View style={styles.container}> 

      <View style={styles.hero}> 

        <Text style={styles.heroTag}>MINI APP LISTA</Text> 

 
 

        <Text style={styles.headerTitle}> 

          AnimeList VIU 

        </Text> 

 
 

        <Text style={styles.headerSubtitle}> 

          Tu colección local de animes favoritos con SQLite. 

        </Text> 

 
 

        <View style={styles.counterBadge}> 

          <Text style={styles.counterText}> 

            {animes.length} anime(s) registrados 

          </Text> 

        </View> 

      </View> 

 
 

      {animes.length === 0 ? ( 

        <View style={styles.emptyContainer}> 

          <Text style={styles.emptyText}> 

            No hay animes registrados 

          </Text> 

 
 

          <Text style={styles.emptySubText}> 

            Ve a la pestaña Crear para agregar uno. 

          </Text> 

        </View> 

      ) : ( 

        <FlatList 

          data={animes} 

          keyExtractor={(item) => 

            item.id.toString() 

          } 

          renderItem={({ item }) => ( 

            <AnimeCard 

              anime={item} 

              onEdit={() => 

                router.push({ 

                  pathname: '/anime/[id]', 

                  params: { 

                    id: item.id.toString(), 

                  }, 

                }) 

              } 

              onDelete={() => 

                handleDeleteAnime(item.id) 

              } 

            /> 

          )} 

          contentContainerStyle={ 

            styles.listContainer 

          } 

          showsVerticalScrollIndicator={false} 

        /> 

      )} 

    </View> 

  ); 

} 

 
 

const styles = StyleSheet.create({ 

  container: { 

    flex: 1, 

    backgroundColor: colors.background, 

  }, 

 
 

  hero: { 

    margin: 16, 

    padding: 18, 

    borderRadius: 24, 

    backgroundColor: colors.surface, 

    borderWidth: 1, 

    borderColor: colors.border, 

  }, 

 
 

  heroTag: { 

    color: colors.accent, 

    fontSize: 12, 

    fontWeight: '900', 

    letterSpacing: 1, 

    marginBottom: 8, 

  }, 

 
 

  headerTitle: { 

    fontSize: 30, 

    fontWeight: '900', 

    color: colors.textPrimary, 

  }, 

 
 

  headerSubtitle: { 

    fontSize: 15, 

    color: colors.textSecondary, 

    marginTop: 6, 

    lineHeight: 21, 

  }, 

 
 

  counterBadge: { 

    alignSelf: 'flex-start', 

    marginTop: 14, 

    backgroundColor: colors.primary, 

    paddingHorizontal: 12, 

    paddingVertical: 7, 

    borderRadius: 999, 

  }, 

 
 

  counterText: { 

    color: colors.white, 

    fontWeight: '900', 

  }, 

 
 

  listContainer: { 

    paddingHorizontal: 16, 

    paddingBottom: 30, 

  }, 

 
 

  centerContainer: { 

    flex: 1, 

    justifyContent: 'center', 

    alignItems: 'center', 

    backgroundColor: colors.background, 

  }, 

 
 

  loadingText: { 

    fontSize: 16, 

    color: colors.textSecondary, 

  }, 

 
 

  emptyContainer: { 

    flex: 1, 

    justifyContent: 'center', 

    alignItems: 'center', 

    paddingHorizontal: 30, 

  }, 

 
 

  emptyText: { 

    fontSize: 22, 

    fontWeight: '900', 

    marginBottom: 10, 

    color: colors.textPrimary, 

  }, 

 
 

  emptySubText: { 

    textAlign: 'center', 

    color: colors.textSecondary, 

    fontSize: 16, 

  }, 

}); 