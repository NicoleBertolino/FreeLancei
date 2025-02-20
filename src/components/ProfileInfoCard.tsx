import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

interface ProfileInfoCardProps {
    iconImage?: number,
    cardHeader: string,
    cardInfo?: string[]
}

const ProfileInfoCard = ({iconImage, cardHeader, cardInfo}: ProfileInfoCardProps) => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            {iconImage && <Image source={iconImage} style={styles.icon}/>}
            <Text style={styles.headerText}>{cardHeader}</Text>
        </View>
        <FlatList
            keyExtractor={(index) => index.toString()}
            data={cardInfo}
            renderItem={({item}) => <Text style={styles.cardInfoText}>{item}</Text>}
            contentContainerStyle={{ gap: 10 }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        gap: 10,
        marginBottom: 20
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    icon: {
        width: 35,
        height: 35
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    cardInfoText: {
        fontSize: 15
    }
});

export default ProfileInfoCard;