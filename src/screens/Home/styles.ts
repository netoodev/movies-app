import { FlatList, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#242A32',
    },

    noResult: {
      color: "#FFF",
      fontSize: 18,
      textAlign: "center",
      marginVertical: 10,
    },
    flatList: {
      
    },
    
    header: {
      padding: 25,
    },
    headerText: {
        marginTop: 30,
        fontSize: 24,
        fontWeight: "600",
        lineHeight: 45,
        color: "#FFF",
    },
    containerInput: {
        backgroundColor: "#3A3F47",
        height: 42,
        padding: 10,
        borderRadius: 16,
        marginTop: 24,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    input: {
      color: "#FFF",
      width: "80%",
      paddingLeft: 15,
    },
  });
  