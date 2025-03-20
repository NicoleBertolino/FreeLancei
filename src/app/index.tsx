import { useEffect } from "react";
import { useRouter, useRootNavigationState } from "expo-router";

const Index = () => {
    const router = useRouter();
    const navigationState = useRootNavigationState();

    useEffect(() => {
        if (navigationState?.key) {
            router.replace("/(auth)");
        }
    }, [navigationState?.key]);

    return null;
};

export default Index;