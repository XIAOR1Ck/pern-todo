const express = require("express");
const app = express();
const cors = require("cors");
const pool = require('./db');


// middleware
app.use(cors());
app.use(express.json());

//Routes//

//Create Todo
app.post("/todos", async(req, res) =>{
    try {
        console.log(req.body);
        const { description } = req.body;
        if (!description) {
            throw { statusCode: 404, message: 'Invalid Key'};
        }
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *", 
            [description]
        );

        res.json(newTodo.rows[0]);
    }
    catch (err) {
        res.json(err);
    };
});
// get all todos
app.get("/todos", async(req, res) => {
    try{
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch(err){
        console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log("The server has started!!");
});
