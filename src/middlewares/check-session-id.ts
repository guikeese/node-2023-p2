import { FastifyReply, FastifyRequest } from 'fastify'

export async function checkSessionId(req: FastifyRequest, res: FastifyReply) {
  const sessionId = req.cookies

  if (!sessionId) {
    res.status(401).send({
      error: 'No trasactions was found! Please insert before use this.',
    })
  }
}
