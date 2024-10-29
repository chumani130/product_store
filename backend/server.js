import express from 'express';  // need to set type from package,json to module

const app = express();

app.listen(5000, () => {
    console.log("Server has started at http://localhost:5000");
})