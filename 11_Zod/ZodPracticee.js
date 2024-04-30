const z = require('zod')


const checkObj = (input) =>{
    const schema = z.object({
        name : z.string(),
        age : z.number(),
        email : z.string().email(),
        city : z.string(),
        pin : z.number()
    })
    // console.log(schema)
    return schema.parse(input)
}

let obj = {
    name : "Harshal",
    age : 23,
    email : "harshmail.com",
    city : "Solapur",
    pin : 41300
}


console.log(checkObj(obj))