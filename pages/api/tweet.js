import prisma from "../../lib/prisma";

export default async function handle(req, res) {
    const { message } = req.body;

    const result = await prisma.Tweet.create({
        data: {
            message
        }
    });

    return res.json(result);
}