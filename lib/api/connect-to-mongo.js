import mongoose from 'mongoose';
import Guide from '../../data/models/Guide';

const connectToMongo = async () => {
  const connection = await mongoose.connect(
    'mongodb+srv://mongoadmin:mongopassadmin@cluster0-wqutv.mongodb.net/aoe2companionapp?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      bufferCommands: false,
      autoCreate: false,
      bufferMaxEntries: 0,
      useUnifiedTopology: true,
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
