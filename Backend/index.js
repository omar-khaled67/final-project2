const app=require("./app");
const dontenv=require("dotenv");
const dbConnection = require("./utils/db");
dontenv.config();

//PORT
const PORT=process.env.PORT;



//SERVER
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    dbConnection();

})
app.get("/", (req, res) => {
  res.send("Backend is working fine!");
});
