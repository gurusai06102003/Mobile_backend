const mongoose = require('mongoose');

const connectToDB = async ()=>{
    try{
        mongoose.connect('mongodb+srv://gurusai62003:gurusai62003password@cluster0.jkltv.mongodb.net/');
        console.log('DB connetion established successfully');
    }catch(e){
        console.log('error in connection of DB ', e);
        process.exit(1);
    }
    // finally{
    //     mongoose.connection.close();
    // }
}

module.exports = connectToDB;