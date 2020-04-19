import mongoose from 'mongoose';
import GuideSchema from '../../data/models/Guide';

const connectToMongo = async () => {
  const connection = await mongoose.createConnection('mongodb://localhost:27017/aoe2companionapp', {
    useNewUrlParser: true,
    bufferCommands: false,
    bufferMaxEntries: 0,
    useUnifiedTopology: true,
  });
  const Guide = connection.model('Guide', GuideSchema);

  return {
    connection,
    models: {
      Guide,
    },
  };
};

export default connectToMongo;
