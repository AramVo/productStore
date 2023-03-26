import { connect } from './db/connection';
import { app } from './app/app';

const PORT = process.env.PORT;

async function main() {
    await connect();
    app.listen(PORT, () => {
        console.log('Listening to port: ', PORT);
    });
}

main();
