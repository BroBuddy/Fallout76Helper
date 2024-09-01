import { StyleSheet, Text, View } from "react-native";

const DescriptionItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemTitle}>{item.name}</Text>
      {item.info && <Text style={styles.itemSubtext}>{item.info}</Text>}
    </View>
  );
};

export default DescriptionItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#DDB724",
    borderRadius: 4,
    padding: 10,
    marginVertical: 4,
  },
  itemTitle: {
    fontSize: 16,
  },
  itemSubtext: {
    fontSize: 12,
    color: "#FFF",
  },
});
