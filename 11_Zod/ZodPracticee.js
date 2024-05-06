const z = require('zod')
const checkObj = (input) =>{
    const schema = z.object({
        name : z.string(),
        age : z.number(),
        email : z.string().email(),
        city : z.string(),
        pin : z.number()
    })
    return schema.parse(input) // safeParse won't throw exception
}
let obj = {
    name : "Harshal",
    age : 23,
    email : "harsh@gmail.com", // it doesn't follow the validation 
    city : "Solapur",
    pin : 41300
}
console.log(checkObj(obj))