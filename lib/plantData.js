const plantData = [
  {
    name: 'Zebra plant',
    id: 'zebra-plant',
    location: 'By the balcony door, in one of the two gold planter'
  },
  {
    name: "Devil's ivy",
    location: 'On the right side of the TV unit in the teal plantpot'
  },
  {
    name: 'Ivy',
    location:
      'On the right side of the TV unit in the white plantpot with the black rim'
  },
  {
    name: 'Lavender',
    location: 'Hanging from the balcony in the silver basket'
  }
];

export default plantData;

export function getPlant(plantId) {
  return plantData.find(plant => plant.id === plantId);
}
