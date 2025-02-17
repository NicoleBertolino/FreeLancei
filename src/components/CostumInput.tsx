import { View, TextInput, StyleSheet } from 'react-native';
import CustomInputProps from "../interfaces/CustomInputProps";

const CostumInput = ({value, onChange, placeHolder, secureTextEntry}: CustomInputProps) => {
  return (
    <View style={styles.container}>
        <TextInput 
            value={value}
            onChangeText={onChange}
            placeholder={placeHolder}
            style={styles.input}
            placeholderTextColor={"grey"}
            secureTextEntry={secureTextEntry}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: "100%",
        
        borderColor: "#E8E8E8",
        borderWidth: 1,
        borderRadius: 5,

        paddingVertical: 10,
        paddingHorizontal: 20,

        marginVertical: 5
    },
    input: {}
})

export default CostumInput;