const express = require('express')
const z = require('zod')
const app = express()

app.use(express.json())

function validateInput(input){
    const schema = z.object({
        email : z.string().email(),
        password : z.string().min(8).max(16)
    })
    return schema.safeParse(input)
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/',(req,res)=>{
    const ab = req.body;
    const result = validateInput(ab)
    if(result.success){

        res.json({
            msg : `Success`,
            data: ab.email,
        })
    }else{
        res.json([
            result.error.issues[0].message
        ])
    }
})
app.listen(3000);