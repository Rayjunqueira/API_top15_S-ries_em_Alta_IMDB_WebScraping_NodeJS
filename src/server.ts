import app from './app';

async function connection () {
    const port = 3090;

    try {
        app.listen(port);
        console.log(`Server started on port ${port}`);
    } catch (err) {
        console.log(err);
    }
}

connection();