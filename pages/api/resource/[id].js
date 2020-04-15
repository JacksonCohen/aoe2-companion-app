import mongoMiddleware from '../../../lib/api/mongo-middleware';
import apiHandler from '../../../lib/api/api-handler';

export default mongoMiddleware(async (req, res, connection, models) => {
  const {
    query: { id, name },
    method,
  } = req;

  apiHandler(res, method, {
    GET: (response) => {
      models.Resource.findById(id, (error, resource) => {
        if (error) {
          connection.close();
          response.status(500).json({ error });
        } else {
          response.status(200).json(resource);
          connection.close();
        }
      });
    },
    POST: (response) => {
      models.Resource.findOneAndUpdate(id, { name }, {}).exec((error, resource) => {
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
