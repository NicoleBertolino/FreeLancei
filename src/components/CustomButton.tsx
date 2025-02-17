import { View, Text, Pressable, StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';
import { CustomButtonProps } from '../interfaces/CustomButtonProps';

const CustomButton = ({title, onPress, type = "PRIMARY", style={}}: CustomButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`], style]}>
        <Text style={[styles.text, styles[`text_${type}`]]}>{title}</Text>
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

    container_TERTIARY: {},

    text: {
        fontWeight: "bold",
        color: "white"
    },

    text_TERTIARY: {
        color: "grey"
    }
});

export default CustomButton;