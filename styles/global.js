import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    searchHistoryText:{
        fontFamily:"Onest",
        fontWeight:"500",
          fontSize: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    flex: 1,
    }, 
    searchContainer: {
     flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 5,
    margin: 15,
    elevation: 2,
  },
 searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 20,
    fontFamily: "Onest", 
    fontWeight: "500",
    color: "#181817", 
  },


})