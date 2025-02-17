import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import CandidatesScreen from "./screens/company/CandidatesScreen";
import SignIn from "./screens/SignIn";
import SignUpCandidate from "./screens/candidate/SignUpCandidate";

function Index() {
  return (
    <SafeAreaView style={styles.root}>
      <SignUpCandidate/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
});

export default Index;