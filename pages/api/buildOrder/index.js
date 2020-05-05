import mongoMiddleware from '../../../lib/api/mongo-middleware';
import apiHandler from '../../../lib/api/api-handler';

export default mongoMiddleware(async (req, res, connection, models) => {
  const { method } = req;
  const order = JSON.parse(req.body);

  apiHandler(res, method, {
    POST: async (response) => {
      const doc = await models.BuildOrder.create({
        order: [],
      });

      order.forEach((step) => {
        doc.order.push({
          image: step.image,
          title: step.title,
          info: step.info,
        });
      });

      await doc.save((error, buildOrder) => {
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
