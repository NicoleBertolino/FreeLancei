import { View, Text, FlatList, Image, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { Candidate } from "../interfaces/Candidate";
import { Company } from "../interfaces/Company";

type User = Candidate | Company;

const UsersScroll = ([users]: User[]) => {
    function renderCandidate(candidate:any) {
      return (
        <TouchableOpacity style={styles.itemContainer}>
          <Image source={{uri: candidate.picture.large}} style={styles.avatar}/>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{`${candidate.name.first} ${candidate.name.last}`}</Text>
            <Text style={styles.phone}>{candidate.phone}</Text>
          </View>
        </TouchableOpacity>
      );
    }

    return (
      <SafeAreaView>
        <FlatList
          keyExtractor={(item:any) => item.id.name + item.id.value}
          data={candidates}
          renderItem={({item}:any) => renderCandidate(item)}
        />
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  phone: {
    fontSize: 14,
    color: "#666",
  },
  loadingText: {
    textAlign: "center",
    marginTop: 20,
  },
  errorText: {
    textAlign: "center",
    marginTop: 20,
    color: "red",
  },
})

export default UsersScroll;