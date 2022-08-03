const {events} = require('./data.json')

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const evt = events.filter(ev => ev.slug === req.query.slug)

  if(req.method === 'GET') {
    res.status(200).json(evt)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({message: `Method ${req.method} is not allowed`})
  }
  
}