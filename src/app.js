import { Connect_db } from "../db/Connections.js"
import { ActivitiesRouter } from "./Modules/Activities/ActivityRouter.js"
import { AuthRouter } from "./Modules/Auth/AuthRouter.js"


import { CategoryRouter } from "./Modules/Category/categoryRoute.js"

import { ErrorHandeller } from "./Utils/ErrorHandling.js"
export const App=(app,port)=>{
app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api/auth',AuthRouter)
app.use('/api/category',CategoryRouter)
app.use('/api/activity',ActivitiesRouter)


app.use(ErrorHandeller)

Connect_db()

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}
