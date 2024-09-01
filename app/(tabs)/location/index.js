import { Stack } from "expo-router";
import {
  StyleSheet,
  Pressable,
  View,
  useWindowDimensions,
  FlatList,
} from "react-native";
import { getAllLocations } from "../../../data/dataService";
import Header from "../../../components/header";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import DescriptionItem from "../../../components/descriptionItem";
import uuid from "react-native-uuid";

const redirectLocation = (id) => {
  router.replace(`/location/${id}`);
};

const SceneTemplate = (data) => {
  return (
    <View style={styles.sceneContainer}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Pressable onPress={() => redirectLocation(item.id)}>
            <DescriptionItem item={item} />
          </Pressable>
        )}
        keyExtractor={() => uuid.v4()}
      />
    </View>
  );
};

const Location = () => {
  const [locationData, setLocationData] = useState([]);
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const routes = [
    { key: "001", title: "The Forest" },
    { key: "002", title: "Toxic Valley" },
  ];

  const renderScene = SceneMap({
    "001": () => SceneTemplate(locationData[0]?.data),
    "002": () => SceneTemplate(locationData[1]?.data),
  });

  useEffect(() => {
    setLocationData(getAllLocations());
  }, [getAllLocations]);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <Header title="Locations" />

      {locationData && (
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={(props) => (
            <TabBar
              lazy
              activeColor="#DDB724"
              indicatorStyle={{ backgroundColor: "#DDB724" }}
              style={{ backgroundColor: "#000" }}
              {...props}
            />
          )}
          initialLayout={{ width: layout.width }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sceneContainer: {
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 8,
    marginVertical: 8,
  },
  header: {
    fontSize: 20,
  },
  item: {
    backgroundColor: "#DDB724",
    borderRadius: 4,
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 8,
  },
  itemNumber: {
    fontSize: 12,
  },
  itemTitle: {
    fontSize: 16,
  },
});

export default Location;
