import chalk from "chalk";
import mongoose from "mongoose"

export const Connect_db = async () => {
   return await mongoose.connect('mongodb+srv://salah:01004037009@cluster0.sru27ya.mongodb.net/todo')
   .then(res => {
      console.log(chalk.bgGreenBright('Database connected successfully'));
   })
   .catch(err => { console.log(chalk.bgRedBright('Database connection failed')) })
}


