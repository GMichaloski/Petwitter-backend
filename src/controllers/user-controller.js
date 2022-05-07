import { prisma } from "../helpers/utils.js";

export const index = async (req, res) => {
  try {
    let users = await prisma.user.findMany({
      select: { email: true },
    });
    return res.send({ data: { users } });
  } catch (error) {
    console.error("users", error);
    res.status(500).send({ error: `Cannot fetch users` });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    let user = await prisma.user.findFirst({
      select: {
        name: true,
        username: true,
        email: true,
      },
      where: {
        id: parseInt(id),
      },
    });
    return res.send({ user });
  } catch (error) {
    console.error("user", error);
    res.status(500).send({ error: `Cannot fetch user` });
  }
};
