import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import CandidatesScreen from "./screens/company/CandidatesScreen";
import SignIn from "./screens/SignIn";

function Index() {
  return (
    <SafeAreaView style={styles.root}>
      <SignIn/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
});

export default Index;