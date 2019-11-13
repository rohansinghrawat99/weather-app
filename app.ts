import express from 'express';

const app = express();

const port = 3000;

//ROUTES
app.get('/', )




app.listen(port, err => {
    if(err) {
        return console.error(err);
    }
    return console.log(`server is running on port ${port}`);
})
