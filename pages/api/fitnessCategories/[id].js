import { fitnessData } from "../../../FitnessData";

export default function handler({ query: { id } }, res) {
  const filteredData = fitnessData.filter((data) => {
    return data.id === id;
  });

  if (filteredData.length > 0) {
    res.status(200).json(filteredData[0]);
  } else {
    res
      .status(404)
      .json({ message: `Data with the id of ${id} is not found! ` });
  }
}
