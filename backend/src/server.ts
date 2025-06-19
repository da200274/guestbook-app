import express from 'express'
import cors from 'cors'
import db from './db.js'
import { ResultSetHeader } from 'mysql2'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/getMessage', (req,res) => {
    const latestNumber = 10
    const sql = 'select * from Message order by created_at desc limit ?'
    db.query(sql, [latestNumber], (err, results)=>{
        if(err) return res.status(500).json({error: err.message});

        const data = results as Array<{solution: number}>
        res.json({result: data});
    })
})

app.post('/sendMessage', (req, res) => {
    const {name, content} = req.body;

    if(!name || !content){
        res.status(400).json({error: "Name and message is required"});
    }
    else{
        const sql = 'insert into Message (name, content) values (?, ?)';
        db.query(sql, [name, content], (err, results)=>{
            if(err) return res.status(500).json({error: err.message});

            const insertResult = results as ResultSetHeader
            res.status(201).json({success: true, id: insertResult.insertId})
        })
    }
})

export default app;

app.listen(4000, ()=>console.log('Express running on port 4000'))
