import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { colors } from '../styles/colors';
import { AnimeFormData } from '../types/anime';
import AppButton from './AppButton';

type AnimeFormProps = {
  initialValues?: AnimeFormData;
  onSubmit: (formData: AnimeFormData) => void;
  buttonTitle: string;
};

export default function AnimeForm({
  initialValues,
  onSubmit,
  buttonTitle,
}: AnimeFormProps) {
  const [formData, setFormData] = useState<AnimeFormData>({
    title: initialValues?.title ?? '',
    genre: initialValues?.genre ?? '',
    episodes: initialValues?.episodes ?? '',
    rating: initialValues?.rating ?? '',
    status: initialValues?.status ?? '',
    description: initialValues?.description ?? '',
  });

  const updateField = (
    field: keyof AnimeFormData,
    value: string
  ) => {

    // Solo números enteros para episodios
    if (field === 'episodes') {
      value = value.replace(/[^0-9]/g, '');
    }

    // Solo números y decimal para rating
    if (field === 'rating') {

      // Solo números y punto decimal
      value = value.replace(/[^0-9.]/g, '');

      // Solo un punto decimal
      const parts = value.split('.');
      if (parts.length > 2) {
        value = `${parts[0]}.${parts[1]}`;
      }

      // Convertir a número temporal
      const numericValue = parseFloat(value);

      // No permitir mayores a 10
      if (!isNaN(numericValue) && numericValue > 10) {
        value = '10';
      }

      // Evitar más de un decimal (ej: 8.55)
      if (value.includes('.')) {
        const [integer, decimal] = value.split('.');
        value = `${integer}.${decimal?.slice(0, 1) ?? ''}`;
      }
    }

    setFormData((previousData) => ({
      ...previousData,
      [field]: value,
    }));
  };

  const handleSubmit = () => {

    if (
      !formData.title.trim() ||
      !formData.genre.trim() ||
      !formData.episodes.trim() ||
      !formData.rating.trim() ||
      !formData.status.trim()
    ) {
      alert(
        'Por favor completa todos los campos obligatorios'
      );
      return;
    }

    const episodes = Number(formData.episodes);
    const rating = Number(formData.rating);

    // Validación episodios
    if (isNaN(episodes) || episodes <= 0) {
      alert(
        'Los episodios deben ser un número válido mayor a 0'
      );
      return;
    }

    // Validación rating
    if (
      isNaN(rating) ||
      rating < 0 ||
      rating > 10
    ) {
      alert(
        'La calificación debe estar entre 0 y 10'
      );
      return;
    }

    onSubmit(formData);
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.container}
      >
        <View style={styles.formCard}>
          <Text style={styles.label}>Título del anime</Text>
          <TextInput
            style={styles.input}
            placeholder="Ejemplo: Naruto"
            placeholderTextColor={colors.textMuted}
            value={formData.title}
            onChangeText={(text) => updateField('title', text)}
          />

          <Text style={styles.label}>Género</Text>
          <TextInput
            style={styles.input}
            placeholder="Ejemplo: Shonen"
            placeholderTextColor={colors.textMuted}
            value={formData.genre}
            onChangeText={(text) => updateField('genre', text)}
          />

          <Text style={styles.label}>Episodios</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Ejemplo: 220"
            placeholderTextColor={colors.textMuted}
            value={formData.episodes}
            onChangeText={(text) => updateField('episodes', text)}
          />

          <Text style={styles.label}>Calificación</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Ejemplo: 9"
            placeholderTextColor={colors.textMuted}
            value={formData.rating}
            onChangeText={(text) => updateField('rating', text)}
          />

          <Text style={styles.label}>Estado</Text>
          <TextInput
            style={styles.input}
            placeholder="Finalizado / En emisión"
            placeholderTextColor={colors.textMuted}
            value={formData.status}
            onChangeText={(text) => updateField('status', text)}
          />

          <Text style={styles.label}>Descripción</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            multiline
            numberOfLines={4}
            placeholder="Describe brevemente el anime"
            placeholderTextColor={colors.textMuted}
            value={formData.description}
            onChangeText={(text) => updateField('description', text)}
          />

          <AppButton title={buttonTitle} onPress={handleSubmit} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    padding: 16,
    paddingBottom: 32,
  },
  formCard: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  label: {
    fontSize: 14,
    fontWeight: '900',
    marginBottom: 8,
    color: colors.textPrimary,
  },
  input: {
    backgroundColor: colors.surfaceSoft,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 14,
    marginBottom: 16,
    fontSize: 16,
    color: colors.textPrimary,
  },
  textArea: {
    minHeight: 110,
    textAlignVertical: 'top',
  },
}); 