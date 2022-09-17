import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY 

export function generateToken (id: string, email: string) {
  return jwt.sign(
    {id, email},
    SECRET_KEY,
    {expiresIn: '24h'}
  )
}

export function validateToken(token: string) {
  try {
    return jwt.verify(token, SECRET_KEY)
  } catch (err) {
    return null;
  }
}