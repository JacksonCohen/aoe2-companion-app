import mongoMiddleware from '../../lib/api/mongo-middleware';
import apiHandler from '../../lib/api/api-handler';

export default mongoMiddleware(async (req, res, connection, models) => {
  const { method } = req;

  apiHandler(res, method, {
    GET: (response) => {
      models.Guide.find({}, (error, guide) => {
        if (error) {
          connection.close();
          response.status(500).json({ error });
        } else {
          response.status(200).json(guide);
          connection.close();
        }
      });
    },
  });
});
