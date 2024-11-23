import 'dotenv/config';
import { ObjectId } from 'mongodb';
import conectarAoBanco from '../config/db.conection.js'

const conection = await conectarAoBanco(process.env.STRING_CONECTION);

export async function getTodosPosts() {
    const db = conection.db("Imersão-dev");
    const collection = db.collection("posts");
    return collection.find().toArray()
}

export async function criarPost(novoPost) {
    const db = conection.db("Imersão-dev");
    const collection = db.collection("posts");
    return collection.insertOne(novoPost)
}

export async function atualizarPost(id, novoPost) {
    const db = conection.db("Imersão-dev");
    const collection = db.collection("posts");
    const objId = ObjectId.createFromHexString(id)
    return collection.updateOne({ _id: new ObjectID(objId) }, { $set: novoPost })
}