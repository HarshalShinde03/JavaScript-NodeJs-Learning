const z = require('zod')

function validateInput(input){
    const schema = z.object({
        email : z.string().email(),
        password : z.string().min(8).max(16)
    })
    return schema.safeParse(input)
}

let a = {
    email : "Harshall@gmailc.om",
    password : "12edhuhj36"
}

console.log(validateInput(a))

