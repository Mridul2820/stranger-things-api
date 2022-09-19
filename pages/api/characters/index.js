import { prisma } from '../../../utils/prisma';

const handler = async (req, res) => {
  if (req.method !== 'GET') {
    res.status(405);
  }

  try {
    const limit = req.query.limit;
    const limitStr = Array.isArray(limit) ? limit[0] : limit;

    const skip = req.query.skip;
    const skipStr = Array.isArray(skip) ? skip[0] : skip;
    const queryConfig = {};

    if (limitStr) {
      const take = parseInt(limitStr);
      if (isNaN(take)) {
        return res
          .status(400)
          .json({ err: 'Please enter a valid number for the limit parameter' });
      }
      queryConfig.take = take;
    }

    if (skipStr) {
      const skip = parseInt(skipStr);
      if (isNaN(skip)) {
        return res
          .status(400)
          .json({ err: 'Please enter a valid number for the skip parameter' });
      }
      queryConfig.skip = skip;
    }

    const characters = await prisma.st_character.findMany(queryConfig);
    return res.status(200).json(characters);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Aghhhhh' });
  }
};

export default handler;
