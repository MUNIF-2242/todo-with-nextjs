import mongoose from 'mongoose';

const DB_URL =
  'mongodb+srv://sbh2242:sbh2242@cluster0.5uegfsp.mongodb.net/todo-app-wth-auth?retryWrites=true&w=majority';

//const DB_URL = process.env.DB_URL;

if (!DB_URL) {
  throw new Error(
    'Please define the DB_URL environment variable inside .env.local'
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const dbConnect = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = mongoose.connect(DB_URL, options).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
};

export default dbConnect;
