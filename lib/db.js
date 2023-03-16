import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://sbh2242:sbh2242@cluster0.5uegfsp.mongodb.net/todo-app-wth-auth?retryWrites=true&w=majority'
  );

  return client;
}
