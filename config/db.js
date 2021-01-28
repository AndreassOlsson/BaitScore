const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

        console.log('MongoDB Connected...')
    } catch(err) {
        console.error(err.message);
        console.log("Bror de GACHLAT :/")
        // Exit process with failure if error
        process.exit(1);
    }
}


module.exports = connectDB;