import express from 'express'
import cors from 'cors'
import db from './db.js'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/getMessage', (req,res) => {
    //res.send("Hello world!")
    db.query('select 1 + 1 as solution', (err, results)=>{
        if(err) return res.status(500).json({error: err.message});

        const data = results as Array<{solution: number}>
        res.json({result: data[0].solution});
    })
})

app.post('/sendMessage', (req, res) => {
    const {name, content} = req.body;

    if(!name || !content){
        res.status(400).json({error: "Name and message is required"});
    }
    else{
        const sql = 'insert into Message (name, message) values (?, ?)';
        db.query(sql, [name, content], (err, results)=>{
            if(err) return res.status(500).json({error: err.message});

            res.status(201).json({success: true, id: results})
        })
    }
})

export default app;

app.listen(4000, ()=>console.log('Express running on port 4000'))
