import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/colors';
import { Anime } from '../types/anime';
import AppButton from './AppButton';

type AnimeCardProps = {
  anime: Anime;
  onEdit: () => void;
  onDelete: () => void;
};

export default function AnimeCard({ anime, onEdit, onDelete }: AnimeCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{anime.title}</Text>
        <Text style={styles.rating}>{anime.rating}/10</Text>
      </View>

      <Text style={styles.genre}>{anime.genre}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Episodios: {anime.episodes}</Text>
        <Text style={styles.infoText}>Estado: {anime.status}</Text>
      </View>

      {anime.description ? (
        <Text style={styles.description}>{anime.description}</Text>
      ) : null}

      <View style={styles.actions}>
        <AppButton title="Editar" onPress={onEdit} variant="secondary" />
        <AppButton title="Eliminar" onPress={onDelete} variant="danger" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: colors.secondary,
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 6,
  },
  title: {
    flex: 1,
    fontSize: 21,
    fontWeight: '900',
    color: colors.textPrimary,
  },
  rating: {
    backgroundColor: colors.secondary,
    color: colors.white,
    fontWeight: '900',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    overflow: 'hidden',
  },
  genre: {
    color: colors.accent,
    fontWeight: '800',
    marginBottom: 10,
  },
  infoContainer: {
    backgroundColor: colors.surfaceSoft,
    padding: 10,
    borderRadius: 14,
    marginBottom: 10,
  },
  infoText: {
    color: colors.textSecondary,
    fontSize: 14,
    marginBottom: 2,
  },
  description: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  actions: {
    gap: 6,
  },
});