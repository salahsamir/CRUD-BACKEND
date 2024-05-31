import chalk from "chalk";
import mongoose from "mongoose"

export const Connect_db = async () => {
   return await mongoose.connect(process.env.dbUri)
   .then(res => {
      console.log(chalk.bgGreenBright('Database connected successfully'));
   })
   .catch(err => { console.log(chalk.bgRedBright('Database connection failed')) })
}


