import { prisma } from "../../../utils/prisma";

const handler = async (req, res) => {
  if (req.method !== "GET") {
    res.status(405);
  }

  const characters = await prisma.st_character.findMany();

  res.status(200).json(characters);
};

export default handler;
