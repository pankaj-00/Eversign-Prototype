import { createUser } from "../utils/userFunctions.js";
const userHandler = async (req, res) => {
  const user = {
    sign: req.body.sign,
    expiresOn: Date.now() + 3 * 24 * 3600 * 1000,
  };
  try {
    const result = await createUser(user);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default userHandler;
