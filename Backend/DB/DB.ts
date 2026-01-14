import { MongoClient } from "mongodb";

type URI = string;
type Data = string;

namespace Client {
  export function getURI(uri: URI) {
    return uri;
  }

  export async function getClientOnline(dataUser: Data) {
    try {
      const m = new MongoClient(Client.getURI("mongodb://localhost:27017"));
      await m.connect();
      console.log("Connected to MongoDB");

      const db = m.db("InputByUser");
      const coll = db.collection("value");
      await coll.insertOne({ data: dataUser });
    } catch (e) {
      console.log(e);
    }
  }
}
