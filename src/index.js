import app from './app.js';
import {dbConnect} from './db/mongoo.js';



const port = 5000

async function main() {
    try {
        await dbConnect()
        app.get('/', (req, res) => res.send('Hello World!'))
        app.listen(process.env.PORT || port)
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
main();