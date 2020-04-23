import mongoMiddleware from '../../../lib/api/mongo-middleware';
import apiHandler from '../../../lib/api/api-handler';

export default mongoMiddleware(async (req, res, connection, models) => {
  const {
    query: { id, name },
    method,
  } = req;

  apiHandler(res, method, {
    GET: (response) => {
      models.Guide.findById(id, (error, guide) => {
        if (error) {
          connection.disconnect();
          response.status(500).json({ error });
        } else {
          response.status(200).json(guide);
          connection.disconnect();
        }
      });
    },
    POST: (response) => {
      models.Guide.findOneAndUpdate(id, { name }, {}).exec((error, guide) => {
        if (error) {
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
