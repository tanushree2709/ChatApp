import { User } from "../models/user.js";

const newUser = async (req, res) => {
  const avatar = {
    public_id: "abc",
    url: "abcde",
  };

  await User.create({
    name: "XYZ",
    username: "xyz",
    password: "xyz123",
    avatar,
  });
  res.status(201).json({ message: "User created successfully" });
};

const login = (req, res) => {
  res.send("Hello World");
};

export { login, newUser };
