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

export const getAllPosts = async (req, res) => {
  try {
    let getPosts = await prisma.post.findMany();
    return res.send(getPosts);
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
