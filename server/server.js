import express from "express"
import axios from "axios"
import cors from 'cors'
import { config } from "dotenv"


const app = express()
config()
app.use(cors())


app.get('/:page',async (req,res)=>{

    console.log('call vannu',"page :",req.params.page)

    const dataUrl = String(process.env.DATA_URL)
    
    const reqUrl = `${dataUrl}/${req.params.page}`

    const response = await axios.get(reqUrl)

    res.status(200).json({data:response.data.nodes})
})


app.get('*',(req,res)=>{
    console.log('hey 404')
    res.status(404).json({"message":"No such routes"})
})


app.listen(3000,()=>{
    console.log('server started..')
})

