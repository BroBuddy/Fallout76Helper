import {
  Text,
  View,
  Modal,
  StyleSheet,
  FlatList,
  Button,
  Pressable,
} from "react-native";
import { router } from "expo-router";
import DescriptionItem from "../../../components/descriptionItem";

const CategoryModal = (props) => {
  const { visible, data } = props;

  const redirectLocation = (id) => {
    props.closeModal();
    router.replace(`/location/${id}`);
  };

  return (
    <Modal visible={visible} animationType="slide">
      {data && (
        <>
          <View style={styles.container}>
            <Text style={styles.title}>{data.title}</Text>

            <Text style={styles.subTitle}>
              You will find what you are looking for in these locations:
            </Text>

            <View>
              <FlatList
                data={data.data}
                renderItem={({ item }) => (
                  <Pressable onPress={() => redirectLocation(item.id)}>
                    <DescriptionItem item={item} />
                  </Pressable>
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>

          <Button title="Close" color="#DDB724" onPress={props.closeModal} />
        </>
      )}
    </Modal>
  );
};

export default CategoryModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  title: {
    fontSize: 24,
    color: "#FFF",
    marginBottom: 16,
  },
  subTitle: {
    fontSize: 16,
    color: "#FFF",
    marginBottom: 16,
  },
});
