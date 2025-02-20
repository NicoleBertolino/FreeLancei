import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/colors';

interface JobVacancyCardProps {
    jobName: string;
    hourlyPay: number;
}

const JobVacancyCard = ({jobName, hourlyPay}: JobVacancyCardProps) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.jobName}>{jobName}</Text>
            <Text style={styles.hourlyPay}>R$ {hourlyPay} / Hora</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primaryLight,
        borderRadius: 12,
        paddingHorizontal: 20,
        paddingVertical: 10,
        gap: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 4
    },
    jobName: {
        fontSize: 20,
        fontWeight: "bold"
    },
    hourlyPay: {
        fontSize: 16
    }
});

export default JobVacancyCard;