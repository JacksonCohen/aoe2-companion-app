import mongoose from 'mongoose';
import BuildOrder from '../../data/models/BuildOrder';
import Guide from '../../data/models/Guide';

const connectToMongo = async () => {
  const connection = await mongoose.connect(
    `mongodb+srv://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@cluster0-wqutv.mongodb.net/aoe2companionapp?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
    }
  );

  return {
    connection,
    models: {
      BuildOrder,
      Guide,
    },
  };
};

export default connectToMongo;
