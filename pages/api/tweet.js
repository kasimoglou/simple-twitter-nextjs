import prisma from "../../lib/prisma";

export default async function handle(req, res) {
    switch (req.method) {
        case 'GET':
            const tweets = await prisma.Tweet.findMany();
            res.status(200).json(tweets);
            break;
        case 'POST':
            const { message } = req.body;

            const result = await prisma.Tweet.create({
                data: {
                    message
                }
            });

            res.status(200).json(result)
            break
        default:
            res.setHeader('Allow', ['GET', 'POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}