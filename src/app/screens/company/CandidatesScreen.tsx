import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import fetchCandidates from "../../../hooks/fetchCandidates";

const CandidatesScreen = () => {
    const {candidates, loading, error} = fetchCandidates("https://randomuser.me/api/?inc=id,name,phone,picture&nat=us&results=30");

    if(loading)
      return <Text style={styles.loadingText}>Loading...</Text>;

    if(error)
      return <Text style={styles.errorText}>Error: {error}</Text>;

    function renderCandidate(candidate:any) {
      return (
        <View style={styles.itemContainer}>
          <Image source={{uri: candidate.picture.large}} style={styles.avatar}/>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{`${candidate.name.first} ${candidate.name.last}`}</Text>
            <Text style={styles.phone}>{candidate.phone}</Text>
          </View>
        </View>
      );
    }

    return (
      <View>
        <FlatList
          keyExtractor={(item:any) => item.id.name + item.id.value}
          data={candidates}
          renderItem={({item}:any) => renderCandidate(item)}
        />
      </View>
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

export default CandidatesScreen;