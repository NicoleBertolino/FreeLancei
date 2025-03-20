import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useState } from "react";
import CustomInput from "@/src/components/CostumInput";
import CustomButton from '@/src/components/CustomButton';
import { useRouter } from 'expo-router';

const SignIn = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();

    const onSignInPressed = () => {
      console.warn("Sign In Pressed");
    }

    const onForgotPasswordPressed = () => {
      console.log("Forgot Password Pressed");
    }

    const onSignUpPressed = () => {
      router.push("/(company)/profile");
    }
    
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView contentContainerStyle={styles.root} showsHorizontalScrollIndicator={false}>
          <Image source={require("@/src/assets/images/freelancei-logo.png")} resizeMode="contain" style={styles.logo} />
          <CustomInput value={username} onChange={setUsername} placeHolder="Usuário" />
          <CustomInput value={password} onChange={setPassword} placeHolder="Senha" secureTextEntry />
          <CustomButton title="Entrar" onPress={onSignInPressed} />
          <CustomButton title="Esqueceu a senha?" onPress={onForgotPasswordPressed} type="TERTIARY"/>
          <CustomButton title="Não tem uma conta? Crie uma!" onPress={onSignUpPressed} type="TERTIARY" style={{marginTop: "auto"}}/>
        </ScrollView>
      </SafeAreaView>
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

export default SignIn;