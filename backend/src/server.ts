import express from 'express'
import cors from 'cors'
import db from './db.js'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req,res) => {
    //res.send("Hello world!")
    db.query('select 1 + 1 as solution', (err, results)=>{
        if(err) return res.status(500).json({error: err.message});
        res.json({result: results});
    })
})

app.listen(4000, ()=>console.log('Express running on port 4000'))
