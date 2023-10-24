import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({    
    phone:{
        type: String,
        required: true
    },
    entrycurrency:{
        type: String,
        required: true
    },
    outputcurrency:{
        type: String,
        required: true
    },
    baseamount:{
        type: Number,
        required: true
    },
    finalamount:{
        type: Number,
        required: true
    }
},{
    timestamps: true
});

export default mongoose.model('Transaction',transactionSchema);