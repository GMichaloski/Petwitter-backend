import { prisma } from "../helpers/utils.js";

export const userPosts = async (req, res) => {
  const { id } = req.query;
  try {
    const postsId = await prisma.post.findMany({
      take: 10,
      where: {
        authorId: Number(id),
      },
      include: {
        author: {
          select: {
            id: true,
            email: true,
            name: true,
            username: true,
          },
        },
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return res.send(postsId);
  } catch (error) {
    res.status(500);
  }
};

export const index = async (req, res) => {
  const page = req.page - 1;
  try {
    const results = await prisma.post.findMany({
      skip: page * 10,
      take: 10,
      include: {
        author: {
          select: {
            id: true,
            email: true,
            name: true,
            username: true,
          },
        },
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return res.send(results);
  } catch (error) {
    res.status(500);
  }
};
