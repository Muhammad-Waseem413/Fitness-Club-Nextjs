import { fitnessData } from "../../../FitnessData";

export default function handler(req, res) {
  res.status(200).json(fitnessData);
}
