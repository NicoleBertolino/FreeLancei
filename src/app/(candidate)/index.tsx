import { View, SafeAreaView, Image, Text, StyleSheet } from 'react-native';
import { PROFILE_ICON } from '@/src/constants/images';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={PROFILE_ICON} style={styles.profileIcon} />
                <Text style={styles.username}>Fernanda Torres</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={{fontWeight: "bold"}}>Sobre mim: </Text>
                <Text>
                    <Text style={{fontWeight: "bold"}}>Contato: </Text>
                    <Text>(31) 99531-3413</Text>
                </Text>
            </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    root: {

    },
    infoContainer: {
        gap: 10
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    container: {
        marginHorizontal: 20,
        marginVertical: 40,
        gap: 20
    },
    profileIcon: {
        width: 95,
        height: 95
    },
    username: {
        fontSize: 25,
        fontWeight: "bold"
    }
});

export default ProfileScreen;