import mongoMiddleware from '../../../lib/api/mongo-middleware';
import apiHandler from '../../../lib/api/api-handler';

export default mongoMiddleware(async (req, res, connection, models) => {
  const { method } = req;
  // All fields in Guide schema
  const {
    userInput: { guideName: name, source, type },
  } = JSON.parse(req.body);

  apiHandler(res, method, {
    POST: (response) => {
      models.Guide.create({ name, source, type }, (error, guide) => {
        if (error) {
          console.error(error);
          connection.disconnect();
          response.status(500).json({ error });
        } else {
          response.status(200).json(guide);
          connection.disconnect();
        }
      });
    },
  });
});
