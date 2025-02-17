import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useState } from "react";
import Logo from "@/src/assets/images/freelancei-logo.png";
import CustomInput from "@/src/components/CostumInput";
import CustomButton from '@/src/components/CustomButton';

const CompanyLoginScreen = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const onSignInPressed = () => {
      console.warn("Sign In Pressed");
    }

    const onForgotPasswordPressed = () => {
      console.log("Forgot Password Pressed");
    }

    const onSignUpPressed = () => {
      console.log("Sign Up Pressed");
    }
    
    return (
      <ScrollView contentContainerStyle={styles.root} showsHorizontalScrollIndicator={false}>
        <Image source={Logo} resizeMode="contain" style={styles.logo} />
        <CustomInput value={username} onChange={setUsername} placeHolder="Username" />
        <CustomInput value={password} onChange={setPassword} placeHolder="Password" secureTextEntry />
        <CustomButton title="Sign In" onPress={onSignInPressed} />
        <CustomButton title="Forgot Password?" onPress={onForgotPasswordPressed} type="TERTIARY"/>
        <CustomButton title="Don't have an account? Create one" onPress={onForgotPasswordPressed} type="TERTIARY" style={{marginTop: "auto"}}/>
      </ScrollView>
    );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F9FBFC"
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 50
  }
})

export default CompanyLoginScreen;