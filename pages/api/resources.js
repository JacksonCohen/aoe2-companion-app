import mongoMiddleware from '../../lib/api/mongo-middleware';
import apiHandler from '../../lib/api/api-handler';

export default mongoMiddleware(async (req, res, connection, models) => {
  const { method } = req;

  apiHandler(res, method, {
    GET: (response) => {
      models.Resource.find({}, (error, resource) => {
        if (error) {
          connection.close();
          response.status(500).json({ error });
        } else {
          response.status(200).json(resource);
          connection.close();
        }
      });
    },
  });
});
