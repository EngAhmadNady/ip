import prisma from "../lib/prisma.js";

export const getUser = async (req, res) => {
  const id = req.params.id;
  const ip = req.params.ip;
  try {
    const user = await prisma.user.findUnique({
      where: { id, ip},
    });
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get user!" });
  }
};
