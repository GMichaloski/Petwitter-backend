import { prisma } from "../helpers/utils.js";

export const getPetweets = async (req, res) => {
  const { id } = req.user;
  try {
    const postsId = await prisma.post.findMany({
      skip: 0,
      take: 2,
      where: {
        user_id: Number(id),
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
            username: true,
          },
        },
      },
    });
    return res.send(postsId);
  } catch (error) {
    res.status(500);
  }
};

export const getAllPetweets = async (req, res) => {
  try {
    const postsId = await prisma.post.findMany({
      skip: 0,
      take: 10,
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
            username: true,
          },
        },
      },
    });
    return res.send(postsId);
  } catch (error) {
    res.status(500);
  }
};
