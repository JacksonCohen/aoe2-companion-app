import mongoose from 'mongoose';
import Guide from '../../data/models/Guide';

const connectToMongo = async () => {
  const connection = await mongoose.connect(
    `mongodb+srv://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@cluster0-wqutv.mongodb.net/aoe2companionapp?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      bufferCommands: false,
    }
  );

  return {
    connection,
    models: {
      Guide,
    },
  };
};

export default connectToMongo;
