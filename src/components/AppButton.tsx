import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../styles/colors';

type AppButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'danger' | 'secondary';
};

export default function AppButton({
  title,
  onPress,
  variant = 'primary',
}: AppButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        styles[variant],
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 13,
    paddingHorizontal: 18,
    borderRadius: 14,
    alignItems: 'center',
    marginVertical: 6,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.accent,
  },
  danger: {
    backgroundColor: colors.danger,
  },
  pressed: {
    opacity: 0.72,
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 0.3,
  },
});