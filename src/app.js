import { Connect_db } from "../db/Connections.js"
import '../Config/config.js'

import { CategoryRouter } from "./Modules/Category/categoryRoute.js"
import { ProductRouter } from "./Modules/Products/productRoute.js"
export const App=(app,port)=>{



app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api/category',CategoryRouter)
app.use('/api/product',ProductRouter)

Connect_db()

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}
