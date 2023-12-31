import bcrypt from "bcryptjs";

const generateHash = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);
  return passwordHash;
};

export default generateHash;
