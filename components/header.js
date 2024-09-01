import FontAwesome from "@expo/vector-icons/FontAwesome";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";

const Header = (props) => {
  const { title, routing } = props;

  const onRouting = (routing) => {
    router.replace(routing);
  };

  return (
    <View style={styles.container}>
      {routing && (
        <View style={styles.button}>
          <Pressable onPress={() => onRouting(routing)}>
            <FontAwesome size={20} name="arrow-left" color="#DDB724" />
          </Pressable>
        </View>
      )}

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    borderBottomWidth: 2,
    borderBottomColor: "#DDB724",
    paddingVertical: 8,
  },
  button: {
    marginLeft: 20,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    color: "#DDB724",
    marginHorizontal: 10,
  },
});
