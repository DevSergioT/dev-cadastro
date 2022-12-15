import mongoose from "mongoose"


mongoose.set('strictQuery', false);


async function connectDataBase() {
  await mongoose.connect("mongodb+srv://dbgfarma:1974logan@cluster0.7jr72zl.mongodb.net/?retryWrites=true&w=majority")

}

export default connectDataBase