import { View, SafeAreaView, Image, Text, StyleSheet } from 'react-native';
import { PROFILE_ICON, LOCATION_ICON } from '@/src/constants/images';
import HeaderProfile from '@/src/components/HeaderProfile';
import ProfileInfoCard from '@/src/components/ProfileInfoCard';
import JobVacancyCard from '@/src/components/JobVacancyCard';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
        <View style={styles.container}>
            <HeaderProfile imageSource={PROFILE_ICON} username="Bar das Flores" />
            <ProfileInfoCard iconImage={LOCATION_ICON} cardHeader="Localização" cardInfo={["Rua José Vicente, 316, Bairro Preto - Belo Horizonte"]}/>
            <ProfileInfoCard cardHeader="Trabalhos oferecidos com frequencia" cardInfo={[`\t\u2022 Garçonete`, `\t\u2022 Recepcionista `]}/>
            <ProfileInfoCard cardHeader="Oferece alimentação no local"/>
            <View>
                <ProfileInfoCard cardHeader="Vagas oferecidas"/>
                <JobVacancyCard jobName="Recepcionista" hourlyPay={12} />
            </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    root: {},
    container: {
        marginHorizontal: 20,
        marginVertical: 40,
        gap: 20
    }
});

export default ProfileScreen;