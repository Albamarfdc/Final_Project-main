/* import express, { json } from 'express'
import cors from 'cors'
import { serverLog } from '../middlewares/index.middlerwares.js'
import { usersRouter, productsRouter, categoriesRouter, errorsRouter, favoritesRouter, scoresRouter } from '../routes/index.routes.js'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(cors())
app.use(json())

app.use(serverLog)

app.use(usersRouter)
app.use(productsRouter)
app.use(categoriesRouter)
app.use(scoresRouter)
app.use(favoritesRouter)
app.use(errorsRouter)

app.listen(PORT, () => console.log(`Your service is live 👾 in ${PORT}`))

export default app */
