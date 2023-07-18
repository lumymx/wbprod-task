import fastify from 'fastify';
import axios from 'axios';

const server = fastify();

server.get('/', async (request, reply) => {
  try {
    const response = await axios.get('http://localhost:3001/random');

    reply.send(response.data);
  } catch (error) {
    reply.status(500).send(error);
  }
});

server.listen(3000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server 1 listening on ${address}`);
});