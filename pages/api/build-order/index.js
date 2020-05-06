import mongoMiddleware from '../../../lib/api/mongo-middleware';
import apiHandler from '../../../lib/api/api-handler';

export default mongoMiddleware(async (req, res, connection, models) => {
  const { method } = req;
  const order = JSON.parse(req.body);
  console.log(order, 'order schema');
  apiHandler(res, method, {
    POST: async (response) => {
      const doc = await models.BuildOrder.create({
        orderTitle: order.title,
        order: [],
      });

      try {
        order.order.forEach((step) => {
          doc.order.push({
            image: step.image,
            stepTitle: step.title,
            info: step.info,
          });
        });
      } catch (error) {
        console.error(error);
        throw Error;
      }

      await doc.save((error, buildOrder) => {
        if (error) {
          console.error(error);
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
