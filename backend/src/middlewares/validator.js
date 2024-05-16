

const validate = (schema) => async(req, res , next) => {
    try {
        // console.log({image: req.files, ...req.body})
        if(!req.files) {
            throw new Error("Image not found")
        }
        const parseBody = await schema.parseAsync({image: req.files, ...req.body});
        req.body = parseBody;
        next()
    } catch (error) {
        const message = error.errors[0].message
        console.log(error)
        res.status(400).json({message: message})
    }
}


const validateLogin = (schema) => async(req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (error) {
        const message = error.errors[0].message
        // console.log(error)
        res.status(400).json({message: message})
    }
}

export  { validate, validateLogin };