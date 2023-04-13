// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import bcyrptjs from 'bcryptjs'
export default function handler(req, res) {
  const asd = bcyrptjs.compareSync("hello","hhhh")
  res.status(200).json({ name: 'John Doe' ,data:asd})

}
