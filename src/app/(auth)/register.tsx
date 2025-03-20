import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useState } from "react";
import CustomInput from "@/src/components/CostumInput";
import CustomButton from '@/src/components/CustomButton';
import { COLORS } from "@/src/constants/colors";

const Label = ({name}: {name: string}) => {
    return <Text style={styles.label}>{name}</Text>
}

const SignUpCandidate = () => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [hourlyPay, setHourlyPay] = useState<string>('');
    // const [foodOffer, setFoodOffer] = useState<boolean>(true);
    // const [desiredService, setDesiredService] = useState<string>('');

    const onSignUpPressed = () => {
        console.warn("Sign Up Pressed");
    }

    const onSignInPressed = () => {
      console.warn("Sign In Pressed");
    }
    
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView contentContainerStyle={styles.root} showsHorizontalScrollIndicator={false}>
          <Text style={styles.title}>Create an account</Text>
          <View style={styles.formItem}>
              <Label name="Username" />
              <CustomInput value={username} onChange={setUsername} placeHolder="John Hooker" />
          </View>
          <View style={styles.formItem}>
              <Label name="Email" />
              <CustomInput value={email} onChange={setEmail} placeHolder="johnny1934@example.com" />
          </View>
          <View style={styles.formItem}>
              <Label name="Password" />
              <CustomInput value={password} onChange={setPassword} placeHolder="Password" secureTextEntry />
          </View>
          <View style={styles.formItem}>
              <Label name="Location" />
              <CustomInput value={location} onChange={setLocation} placeHolder="1600 Amphitheatre Parkway, Mountain View, CA 94043, USA" secureTextEntry />
          </View>
          <View style={styles.formItem}>
              <Label name="R$ / Hour" />
              <CustomInput value={hourlyPay} onChange={setHourlyPay} placeHolder="12,00" secureTextEntry />
          </View>
          <CustomButton title="Sign Up" onPress={onSignUpPressed} />
          <CustomButton title="Already have an account? Sign In" onPress={onSignInPressed} type="TERTIARY" style={{marginTop: "auto"}}/>
        </ScrollView>
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