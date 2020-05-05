import mongoMiddleware from '../../lib/api/mongo-middleware';
import apiHandler from '../../lib/api/api-handler';

export default mongoMiddleware(async (req, res, connection, models) => {
  const { method } = req;

  apiHandler(res, method, {
    GET: (response) => {
      models.BuildOrders.find({}, (error, buildOrders) => {
        if (error) {
          connection.disconnect();
          response.status(500).json({ error });
        } else {
          response.status(200).json(buildOrders);
          connection.disconnect();
        }
      });
    },
  });
});
