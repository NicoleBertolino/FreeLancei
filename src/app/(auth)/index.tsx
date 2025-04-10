import { View, Image, StyleSheet, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';
import { useState } from "react";
import CustomInput from "@/src/components/CostumInput";
import CustomButton from '@/src/components/CustomButton';
import { useRouter } from 'expo-router';
import { FIREBASE_AUTH } from '@/src/lib/firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getUser } from '@/src/lib/firestore-api';
import { COLORS } from '@/src/constants/colors';
import { COMPANNY_COLLECTION, FREELANCER_COLLECTION } from '@/src/constants/conninfo';

const SignIn = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;
    
    const router = useRouter();

    const handleSignIn = async () => {
      setLoading(true);

      // Just about to connect things
      try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        const user_credentials = response.user;
        let user;
        
        user = await getUser(COMPANNY_COLLECTION, user_credentials.uid);

        if(user == undefined) {
          user = await getUser(FREELANCER_COLLECTION, user_credentials.uid);

          router.replace({
            pathname: "../(company)",
            params: {...user}
          });
        } else {
          router.replace({
            pathname: "../(company)",
            params: user
          });
        }
      } catch(error: any) {
        alert("Sign In failed:" + error.message);
      } finally {
        setLoading(false);
      }
    }

    const onForgotPasswordPressed = () => {
      console.log("Forgot Password Pressed");
    }

    const goToRegisterPage = async () => {
      router.push("/register-option");
    }
    
    return (
      <SafeAreaView style={{flex: 1}}>
        {
          loading ? (
            <View style={styles.spin}>
              <ActivityIndicator size="large" color={COLORS.primary} />
            </View>
          ) : (
            <ScrollView contentContainerStyle={styles.root} showsHorizontalScrollIndicator={false}>
              <Image source={require("@/src/assets/images/freelancei-logo.png")} resizeMode="contain" style={styles.logo} />
              <CustomInput value={email} onChange={(email) => setEmail(email)} placeHolder="Usuário" />
              <CustomInput value={password} onChange={(password) => setPassword(password)} placeHolder="Senha" secureTextEntry />
              <CustomButton title="Entrar" onPress={handleSignIn} />
              <CustomButton title="Esqueceu a senha?" onPress={onForgotPasswordPressed} type="TERTIARY"/>
              <CustomButton title="Não tem uma conta? Crie uma!" onPress={goToRegisterPage} type="TERTIARY" style={{marginTop: "auto"}}/>
            </ScrollView>
          )
        }
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  spin: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)"
  },
  root: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: COLORS.bgMainColor
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 50
  }
})

export default SignIn;