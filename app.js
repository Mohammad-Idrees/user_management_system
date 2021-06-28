const mongoose = require("mongoose")

require("dotenv").config();

//connect database
const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.DATABASE_URL, { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch(err){
        console.error(err);
        process.exit(1);
    };
};
connectDB();


const frontend_port = process.env.FRONTEND_PORT || 5000;
const backend_port = process.env.BACKEND_PORT || 5001;

frontend_app = require('./frontend/frontend');
backend_app = require('./backend/backend');


frontend_app.listen(frontend_port, ()=>console.log(`Frontend listening on PORT ${frontend_port}`));
backend_app.listen(backend_port, ()=>console.log(`Backend listening on PORT ${backend_port}`));
