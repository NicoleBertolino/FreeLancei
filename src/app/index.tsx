import { Link } from "expo-router";
import { SafeAreaView } from "react-native";

const Index = () => {
    return (
        <SafeAreaView
        style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Link href="/auth/SignUpCandidate">Go To Sign Up Candidate</Link>
            <Link href="/auth/SignIn">Go To Log In Page</Link>
            <Link href="/candidate/ProfileScreen">Go To Provider Profile</Link>
            <Link href="/company/CandidatesScreen">Go To Candidates Screen</Link>
            <Link href="/company/ProfileScreen">Go To Company Profile</Link>
        </SafeAreaView>
    );
};

export default Index;