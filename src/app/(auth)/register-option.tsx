import { SafeAreaView, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '@/src/constants/colors';
import { OFFICE_BUILDING_ICON, AVATAR_ICON } from '@/src/constants/images';
import { useRouter } from 'expo-router';

const RegisterOptionScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View style={{alignItems: "center"}}>
          <TouchableOpacity onPress={() => router.push("/register-company")}>
            <Image source={OFFICE_BUILDING_ICON} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.textBelowIcon}>EMPRESA</Text>
        </View>
        <View style={{alignItems: "center"}}>
          <TouchableOpacity onPress={() => router.push("/register-company")}>
            <Image source={AVATAR_ICON} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.textBelowIcon}>FREELANCER</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.bgMainColor,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  icon: {
    width: 120,
    height: 120
  },
  textBelowIcon: {
    fontWeight: "bold",
    fontSize: 15
  }
})

export default RegisterOptionScreen;