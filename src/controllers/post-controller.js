import { prisma } from "../helpers/utils.js";

export const create = async (req, res) => {
  const { content } = req.body;
  const { id } = req.user;
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    if (!user) {
      throw new Error("Cannot find user!");
    }
    const post = await prisma.post.create({
      data: {
        content,
        user_id: id,
      },
    });
    return res.send(post);
  } catch (error) {
    res.status(500);
  }
};

export const getPosts = async (req, res) => {
  const { id } = req.query;
  let where = {};
  if (id) {
    where = {
      user_id: Number(id),
    };
  }
  try {
    const postsId = await prisma.post.findMany({
      skip: 0,
      take: 10,
      ...{ where },
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
      orderBy: {
        id: "desc",
      },
    });
    return res.send(postsId);
  } catch (error) {
    res.status(500);
  }
};

export const removePost = async (req, res) => {
  const { id } = req.body;
  try {
    const post = await prisma.post.delete({
      where: {
        id: id,
      },
    });
    return res.send(post);
  } catch (error) {
    res.status(500);
  }
};
