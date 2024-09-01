import { Stack } from "expo-router";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { getLocationCategories } from "../../../data/dataService";
import Header from "../../../components/header";
import DescriptionItem from "../../../components/descriptionItem";
import CategoryModal from "./categoryModal";
import uuid from "react-native-uuid";

const Home = () => {
  const [locationData, setLocationData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const showCategory = (categoryTitle, categoryData) => {
    setModalData({ title: categoryTitle, data: categoryData });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setLocationData(getLocationCategories());
  }, [getLocationCategories]);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <Header title="Fallout 76 Helper" />

      <CategoryModal
        visible={showModal}
        data={modalData}
        closeModal={closeModal}
      />

      <View style={styles.container}>
        <Text style={styles.subTitle}>What are you looking for right now?</Text>

        <View>
          {locationData.map((item) => {
            return (
              <Pressable
                key={uuid.v4()}
                onPress={() => showCategory(item.name, item.data)}
              >
                <DescriptionItem
                  item={{
                    name: item.name,
                  }}
                />
              </Pressable>
            );
          })}
        </View>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  subTitle: {
    marginBottom: 6,
  },
});
