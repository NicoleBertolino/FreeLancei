import { collection, CollectionReference, doc, DocumentReference, getDoc, setDoc } from "firebase/firestore";
import { FIRESTORE_DB } from "./firebase-config";

function createDocument(collection: CollectionReference, document_name: string) {
    return doc(collection, document_name);
}

async function addNewDocument(document: DocumentReference, data: Object) {
    await setDoc(document, data);
}

async function getDocumentReference(collection_name: string, document_name: string) {
    return doc(FIRESTORE_DB, collection_name, document_name);
}

async function getDocument(collection_name: string, document_name: string) {
    const document = await getDocumentReference(collection_name, document_name);

    return await getDoc(document);
}

export { createDocument, getDocumentReference, getDocument, addNewDocument };