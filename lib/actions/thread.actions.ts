import { connectToDB } from "../mongoose"



interface Params {
    text: string,
    author: string,
    communityId: string | null,
    path: string,
}

export async funtion createThread({text, author, communityId, path}: Params) {
    connectToDB()

    const createdThread = await Thread.create({
        text,
        author,
        community: communityIdObject, // Assign communityId if provided, or leave it null for personal account
      });
};