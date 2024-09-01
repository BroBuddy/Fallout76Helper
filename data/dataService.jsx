import DATA from "../data/data.json";

export const getAllLocations = () => {
  return DATA.map((area) => {
    area.data.sort((a, b) => (a.name < b.name ? -1 : 1));

    return area;
  });
};

export const getLocationDetailsById = (id) => {
  const findLocation = DATA.map((area) => area.data)
    .flat()
    .find((location) => location.id === id);

  return findLocation;
};

export const getLocationCategories = () => {
  return [
    {
      name: "Bobbleheads",
      data: findLocationByCategory("bobbleheads"),
    },
    {
      name: "Caches",
      data: findLocationByCategory("caches"),
    },
    {
      name: "Crafting Stations",
      data: findLocationByCategory("crafting"),
    },
    {
      name: "Holotapes",
      data: findLocationByCategory("holotapes"),
    },
    {
      name: "Magazines",
      data: findLocationByCategory("magazines"),
    },
    {
      name: "Treasures",
      data: findLocationByCategory("treasures"),
    },
    {
      name: "Weapons",
      data: findLocationByCategory("weapons"),
    },
  ];
};

const findLocationByCategory = (category) => {
  const findLocation = DATA.map((area) => area.data)
    .flat()
    .filter((location) => location.hasOwnProperty(category))
    .sort((a, b) => (a.name < b.name ? -1 : 1));

  return findLocation;
};
