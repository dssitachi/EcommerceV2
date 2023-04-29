import { Account, AppwriteException, Client, ID } from 'appwrite';

const client = new Client()
    .setEndpoint(import.meta.env.VITE_APPWRITE_URL)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT)

export const register = async function(email, password) {
    try {
        var account = new Account(client);
        return account.create(ID.unique(), email, password)
    } catch(error) {
        // var appWriteError = error;
        throw new Error(error.message)
    }
}