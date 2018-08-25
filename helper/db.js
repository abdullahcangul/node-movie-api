const mongoose=require("mongoose")

module.exports=()=>{
   mongoose.connect("mongodb://abdullah:12345a@ds125392.mlab.com:25392/movie-api2",{ useNewUrlParser: true }) 
   mongoose.connection.on("open",()=>{
       console.log("DB:Connected")
   })
   mongoose.connection.on("error",(err)=>{
    console.log("hata yakalandı:,",err)
   })
}