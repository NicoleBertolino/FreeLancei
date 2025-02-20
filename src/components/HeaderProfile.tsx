import { View, Text, StyleSheet, Image } from 'react-native';

interface HeaderProfileProps{
    imageSource: number;
    username: string
}

const HeaderProfile = ({imageSource, username}: HeaderProfileProps) => {
  return (
    <View style={styles.header}>
        <Image source={imageSource} style={styles.profileIcon} />
        <Text style={styles.username}>{username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    profileIcon: {
        width: 95,
        height: 95
    },
    username: {
        fontSize: 25,
        fontWeight: "bold"
    }
})

export default HeaderProfile;