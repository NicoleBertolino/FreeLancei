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
            <Link href="/auth/SignIn">Go To Sign In</Link>
        </SafeAreaView>
    );
};

export default Index;