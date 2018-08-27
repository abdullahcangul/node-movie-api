const mongoose=require("mongoose")
const Schema=mongoose.Schema

const movieSchema=new Schema({
    director_id:Schema.Types.ObjectId,
    title:{
        type:String,
        required:true,
        required:  [true, '`{PATH}` alanı zorunludur.'],
			maxlength: [15, '`{PATH}` alanı (`{VALUE}`), ({MAXLENGTH}) karakterden küçük olmalıdır '],
			minlength: [3, '`{PATH}` alanı (`{VALUE}`), ({MINLENGTH}) karakterden büyük olmalıdır.']
    },
    category: {
    	type: String,
			maxlength: 30,
			minlength: 1,
		},
    country:String,
    year: {
    	type: Number,
			max: 2040,
			min: 1900
		},
    imdb_score:Number,
    createdAt:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model("movie",movieSchema)