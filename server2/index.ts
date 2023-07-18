import fastify from 'fastify';

const server = fastify();

server.get('/random', async (_, reply) => {
  try {
    reply.send({ random: Math.floor(Math.random() * 100) });
  } catch (error) {
    reply.status(500).send(error);
  }
});

server.listen(3001, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server 2 listening on ${address}`);
});