import { View, Text, StyleSheet, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';
import { useState } from "react";
import CustomInput from "@/src/components/CostumInput";
import CustomButton from '@/src/components/CustomButton';
import { COLORS } from "@/src/constants/colors";
import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '@/src/lib/firebase-config';
import { getDocumentReference } from '@/src/lib/firestore-api';
import { COMPANNY_COLLECTION } from '@/src/constants/conninfo';
import { setDoc } from 'firebase/firestore';

const Label = ({name}: {name: string}) => {
    return <Text style={styles.label}>{name}</Text>
}

type CompanyLoginInfo = {
  name: string,
  password: string,
  email: string,
  location: string,
  hourlyPay: string,
  uid: string
}

const SignUpCandidate = () => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [hourlyPay, setHourlyPay] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const auth = FIREBASE_AUTH;
    const router = useRouter();

    async function registerCompany(company: CompanyLoginInfo) {
      await setDoc(await getDocumentReference(COMPANNY_COLLECTION, company.uid), company);
      
      return true;
    }

    function validateSignUpForm() {
      function isSomeFieldEmpty() {
        return !username.trim() ||
               !email.trim() ||
               !password.trim() ||
               !location.trim() ||
               !hourlyPay.trim()
      }

      if(isSomeFieldEmpty()) {
        setError("Todos os campos devem ser preenchidos!");
        return false;
      }

      setError("");
      return true;
    }

    const handleSignUp = async () => {
      setLoading(true);

      if(validateSignUpForm() == false) {
        setLoading(false);
        return;
      }

        try {
          const response = await createUserWithEmailAndPassword(auth, email, password);

          const company = {
            name: username,
            password,
            email,
            location,
            hourlyPay,
            uid: response.user.uid
          };

          if(await registerCompany(company)) {
            alert("Empresa cadastrada com sucesso!");
            router.dismissTo("/");
          }

        } catch(error: any) {
          alert("Sign Up failed: " + error.message);
        } finally {
          setLoading(false);
        }

        console.warn("Sign Up Pressed");
    }

    const goToSignInPage = () => {
      router.dismissTo("/");
    }
    
    return (
        <SafeAreaView style={{flex: 1}}>
        {
          loading ? (
            <View style={styles.spin}>
              <ActivityIndicator size="large" color={COLORS.primary} />
            </View>
          ) :
          (
            <ScrollView contentContainerStyle={styles.root} showsHorizontalScrollIndicator={false}>
              <Text style={styles.title}>Create an account</Text>
              <View style={styles.formItem}>
                  <Label name="Usuário" />
                  <CustomInput value={username} onChange={setUsername} placeHolder="John Hooker" />
              </View>
              <View style={styles.formItem}>
                  <Label name="Email" />
                  <CustomInput value={email} onChange={setEmail} placeHolder="johnny1934@example.com" />
              </View>
              <View style={styles.formItem}>
                  <Label name="Senha" />
                  <CustomInput value={password} onChange={setPassword} placeHolder="Password" secureTextEntry />
              </View>
              <View style={styles.formItem}>
                  <Label name="Localização" />
                  <CustomInput value={location} onChange={setLocation} placeHolder="1600 Amphitheatre Parkway, Mountain View, CA 94043, USA" />
              </View>
              <View style={styles.formItem}>
                  <Label name="R$ / Hora" />
                  <CustomInput value={hourlyPay} onChange={setHourlyPay} placeHolder="12,00" />
              </View>
              {
                error ? (
                  <Text style={{ color: "red" }}>{error}</Text>
                ) : null
              }
              <CustomButton title="Cadastrar" onPress={handleSignUp} />
              <CustomButton title="Já tem uma conta? Entre" onPress={goToSignInPage} type="TERTIARY" style={{marginTop: "auto"}}/>
            </ScrollView>
          )
        }
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    gap: 20,
    padding: 20,
    backgroundColor: "#F9FBFC"
  },
  spin: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)"
  },
  title: {
    alignSelf: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 50
  },
  formItem: {
    gap: 5
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
  }
})

export default SignUpCandidate;