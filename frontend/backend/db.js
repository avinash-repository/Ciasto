const mongoose=require('mongoose');
const mongoURI = 'mongodb://avikumar456123:demon67@ac-kxr1xp2-shard-00-00.rsgtpk9.mongodb.net:27017,ac-kxr1xp2-shard-00-01.rsgtpk9.mongodb.net:27017,ac-kxr1xp2-shard-00-02.rsgtpk9.mongodb.net:27017/ciastomern?ssl=true&replicaSet=atlas-c1d6pp-shard-0&authSource=admin&retryWrites=true&w=majority'

const mongoDB =async ()=>{
    
   await  mongoose.connect(mongoURI , {useNewUrlParser: true} , (err, result) =>{

    if(err) {
        console.log("--" , err)
    }
    else{
    
    
        console.log("Connected");
        const fetched_data =  mongoose.connection.db.collection("cake_item");
        fetched_data.find({}).toArray( function(err, data){
            const cakeCategory = mongoose.connection.db.collection("cake_category");
                cakeCategory.find({}).toArray(async function (err, catData) {
                    if(err) console.log(err);
                    else{
                        global.cake_item= data;
                        global.cake_category= catData;
                                    
                    }
                })
            
      
         
        })
    } 

    });
    
}

module.exports = mongoDB;


