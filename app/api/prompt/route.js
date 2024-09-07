
import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";


export const GET = async (request) => {
    try {
        await connectToDB();
        const prompts = await Prompt.find({}).populate('creator');
        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        console.log("Error fetching prompts: ", error.message);
        return new Response("Failed to fetch prompts", { status: 500 });
    }
}
