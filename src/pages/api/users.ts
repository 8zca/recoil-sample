import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const users = [
      {
        id: 1,
        name: 'Tom'
      },
      {
        id: 2,
        name: 'Smith'
      },
      {
        id: 3,
        name: 'Green'
      },
      {
        id: 4,
        name: 'Tommy'
      }
    ]

    const filtered = req.query.q ? users.filter((user) => user.name.includes(req.query.q as string)) : users

    res.status(200).json(filtered)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}
