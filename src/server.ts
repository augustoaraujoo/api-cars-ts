import express from 'express'
import { categoriesRoutes } from './routes/categories.routes'
import { personRoutes } from './routes/person.routes'
const app = express()

app.use(express.json())
app.use("/categories", categoriesRoutes);
app.use("/person", personRoutes)
app.listen(3333, () => {
    console.log('ok');
})