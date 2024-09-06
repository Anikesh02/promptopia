
import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";


export const POST = async (req) => {
    const { prompt, userId, tag } = await req.json();

    try {
        // connect to MongoDB
        await connectToDB();

        // create a new prompt
        const newPrompt = await Prompt.create({
            creator: userId,
            prompt,
            tag,
        });

        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt), { status: 201 })

    } catch (error) {
        console.log("Error creating prompt: ", error.message);
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}

