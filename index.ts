import express, { Express, Request, Response } from "express"
const app: Express = express()
const port = 8000

app.get('/', (req: Request, res: Response) => res.send('Hello World!'))
app.get('/hi', (req: Request, res: Response) => res.send('hi'))
app.listen(port, () => console.log(`app listening on port ${port}!`))