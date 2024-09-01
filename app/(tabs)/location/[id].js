import { Stack } from "expo-router";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { getLocationDetailsById } from "../../../data/dataService";
import { useEffect, useState } from "react";
import Header from "../../../components/header";
import DescriptionItem from "../../../components/descriptionItem";
import Images from "../../../data/images";
import uuid from "react-native-uuid";

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.itemTitle}>{item}</Text>
  </View>
);

const GroupList = ({ title, data, description }) => {
  return (
    <>
      <View style={styles.divider}>
        <Text style={styles.header}>{title}</Text>
      </View>

      <View>
        {description &&
          data.map((item) => <DescriptionItem key={uuid.v4()} item={item} />)}

        {!description &&
          data.map((item) => <Item key={uuid.v4()} item={item} />)}
      </View>
    </>
  );
};

const LocationDetail = () => {
  const { id } = useLocalSearchParams();
  const [location, setLocation] = useState(null);

  const checkNameLength = (name) => {
    const maxNameLength = 32;

    if (name.length >= maxNameLength) {
      return name.substring(0, maxNameLength) + "...";
    }

    return name;
  };

  useEffect(() => {
    setLocation(getLocationDetailsById(id));
  }, [id]);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView>
        {location && (
          <View>
            <Header title={checkNameLength(location.name)} routing="location" />
            <Image
              style={{ width: "100%", height: 250 }}
              source={Images[location.id] ?? Images["000"]}
            />
          </View>
        )}

        <View style={styles.container}>
          {location && (
            <>
              {location.bobbleheads && (
                <GroupList
                  title="Bobbleheads"
                  data={location.bobbleheads}
                  description={true}
                />
              )}

              {location.caches && (
                <GroupList
                  title="Overseer's Caches"
                  data={location.caches}
                  description={true}
                />
              )}

              {location.crafting && (
                <GroupList
                  title="Crafting Stations"
                  data={location.crafting}
                  description={false}
                />
              )}

              {location.holotapes && (
                <GroupList
                  title="Holotapes"
                  data={location.holotapes}
                  description={true}
                />
              )}

              {location.magazines && (
                <GroupList
                  title="Magazines"
                  data={location.magazines}
                  description={true}
                />
              )}

              {location.treasures && (
                <GroupList
                  title="Treasures"
                  data={location.treasures}
                  description={true}
                />
              )}

              {location.weapons && (
                <GroupList
                  title="Weapons"
                  data={location.weapons}
                  description={true}
                />
              )}
            </>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default LocationDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  header: {
    fontSize: 20,
  },
  divider: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#aaa",
    paddingVertical: 6,
  },
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
