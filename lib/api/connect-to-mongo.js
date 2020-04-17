import mongoose from 'mongoose';
import ResourceSchema from '../../data/models/Resource';

const connectToMongo = async () => {
  const connection = await mongoose.createConnection('mongodb://localhost:27017/aoe2companionapp', {
    useNewUrlParser: true,
    bufferCommands: false,
    bufferMaxEntries: 0,
    useUnifiedTopology: true,
  });
  const Resource = connection.model('Resource', ResourceSchema);

  return {
    connection,
    models: {
      Resource,
    },
  };
};

export default connectToMongo;
