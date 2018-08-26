const express = require('express');
const router = express.Router();
//Models
const Movie=require("../models/Movie")

router.get("/",(req,res)=>{
  const promise= Movie.find({})

  .then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json(err)
  });
})
//Top 10 list diyer get in üstüne yazıldı yoksa hata veriyor
router.get("/Top10",(req,res)=>{
  const promise= Movie.find({}).limit(10).sort({imdb_score:-1})//yeri önemli

  .then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json(err)
  });
})

router.get("/:movie_id",(req,res,next)=>{

 const promise=Movie.findById(req.params.movie_id)
 promise.then((movie)=>{
  if(!movie){
   next({message:"The movie was not found"})//kullanıcıya hata gösterme
  }
  res.json(movie)
 }).catch((err)=>{
   res.json(err)
 })
})
router.put("/:movie_id",(req,res,next)=>{

  const promise=Movie.findByIdAndUpdate(req.params.movie_id,req.body,{new:true})
  //{new :true}  yazılmasaydı veri tabanı degisirdi ama kullanıcıya eski deger dönerdi
  promise.then((movie)=>{
   if(!movie){
    next({message:"The movie was not found"})//kullanıcıya hata gösterme
   }
   res.json(movie)
  }).catch((err)=>{
    res.json(err)
  })
 })
 router.delete("/:movie_id",(req,res,next)=>{

  const promise=Movie.findByIdAndRemove(req.params.movie_id)
  promise.then((movie)=>{
   if(!movie){
    next({message:"The movie was not found"})//kullanıcıya hata gösterme
   }
   res.json({status:1})
  }).catch((err)=>{
    res.json(err)
  })
 })

router.post('/', function(req, res, next) {
 // const {title,imdb_score,category,country,year}=req.body;//uzun yöntem
  const movie=new Movie(req.body)// kolay yöntem

  const promise=movie.save();//promisle daha düzgün ve modern
  promise.then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json(err)
  });
  
});
//between
router.get("/between/:start_year/:end_year",(req,res)=>{
  const {start_year,end_year}=req.params
  const promise= Movie.find(
    {//2 yıl arasındaki zamanı getirir
    year:{"$gte":parseInt(start_year),"$lte":parseInt(end_year)}
    }
)
  .then((data) => {
    res.json(data)
  }).catch((err) => {
    res.json(err)
  });
})

module.exports = router;
