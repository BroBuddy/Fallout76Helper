import { Stack } from "expo-router";
import { Text, View } from "react-native";

const Search = () => {
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />

      <Text>Search</Text>
    </View>
  );
};

export default Search;
