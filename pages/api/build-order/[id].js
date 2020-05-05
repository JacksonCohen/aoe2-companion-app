import mongoMiddleware from '../../../lib/api/mongo-middleware';
import apiHandler from '../../../lib/api/api-handler';

export default mongoMiddleware(async (req, res, connection, models) => {
  const {
    query: { id, name },
    method,
  } = req;

  apiHandler(res, method, {
    GET: (response) => {
      models.BuildOrder.findById(id, (error, buildOrder) => {
        if (error) {
          connection.disconnect();
          response.status(500).json({ error });
        } else {
          response.status(200).json(buildOrder);
          connection.disconnect();
        }
      });
    },
    POST: (response) => {
      models.BuildOrder.findOneAndUpdate(id, { name }, {}).exec((error, buildOrder) => {
        if (error) {
          connection.disconnect();
          response.status(500).json({ error });
        } else {
          response.status(200).json(buildOrder);
          connection.disconnect();
        }
      });
    },
  });
});
