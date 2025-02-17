import { View, Text, Pressable, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';
import { CustomButtonProps } from '../interfaces/CustomButtonProps';

const CustomButton = ({title, onPress, type = "PRIMARY", style={}}: CustomButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, type ? styles[`container_${type}`] : null, style]}>
        <Text style={[styles.text, type ? styles[`text_${type}`] : null]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        width: "100%",
        padding: 15,
        marginVertical: 10,
        borderRadius: 5
    },

    container_PRIMARY: {
        backgroundColor: COLORS.primary,
    },

    container_SECONDARY: {},

    container_TERTIARY: {},

    text: {
        fontWeight: "bold",
        color: "white"
    },

    text_PRIMARY: {},

    text_SECONDARY: {},

    text_TERTIARY: {
        color: "grey"
    }
});

export default CustomButton;