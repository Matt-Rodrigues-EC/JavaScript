import { createServer } from 'http';

const server = createServer((request, response) => {
    switch(request.url){
        case '/status': {
            response.writeHead(200, {
                'Content-Type': 'application/json',
            });
            response.write(
                JSON.stringify({
                    status: 'Okay',
                })
            );
            response.end();
            break;
        }
        default: {
            response.writeHead(404, 'Server not found');
            response.end();
            return;
        }
    }
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

server.listen(8000, HOSTNAME, () => {
    console.log(`server is listenning at http://127.0.0.1:${PORT}`);
});