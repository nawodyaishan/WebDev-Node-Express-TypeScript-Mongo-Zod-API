import {Express, Response, Request, NextFunction} from "express";
import {AnyZodObject} from "zod";

const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse(
            // Validating Schema by request
            {
                body: req.body,
                query: req.query,
                params: req.params
            }
        )
    } catch (e: any) {
        return res.status(400).send(e.errors)
    }
}

export default validate;