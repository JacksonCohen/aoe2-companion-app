import connectToMongo from './connect-to-mongo';

const mongoMiddleware = (handler) => async (req, res) => {
  const { connection, models } = await connectToMongo();
  try {
    await handler(req, res, connection, models);
  } catch (err) {
    connection.disconnect();
    res.status(500).json({ error: err.message || 'Something went wrong' });
  }
};

export default mongoMiddleware;
