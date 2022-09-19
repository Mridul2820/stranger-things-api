import { prisma } from '../../../utils/prisma';

const handler = async (req, res) => {
  if (req.method !== 'GET') {
    res.status(405);
  }
  try {
    const id = req.query.id;
    const idStr = Array.isArray(id) ? id[0] : id || '';
    const idNum = parseInt(idStr);
    if (isNaN(idNum)) {
      return res
        .status(400)
        .json({ err: 'Please enter a valid number for the character id' });
    }

    const character = await prisma.st_character.findUnique({
      where: { id: idNum },
    });

    if (!character) {
      return res.status(404);
    }
    return res.status(200).json(character);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Aghhhhh' });
  }
};

export default handler;
