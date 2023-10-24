import Transaction from '../models/transaction.model.js'

export const  createRegister = async (req,res)=>{

    const {phone,entrycurrency,outputcurrency,baseamount,finalamount} = req.body;

    try{
        const newTransaction = new Transaction({
            phone,entrycurrency,outputcurrency,baseamount,finalamount
        });        
        const transSaved = await newTransaction.save();
        res.json(transSaved);
    }
    catch(error){
        console.log(error);
    }    
}

export const getRegisters = async (req,res) => {
    const transc = await Transaction.find();
    res.json(transc)
};
export const getRegister = async (req,res) => {
    const transc = await Transaction.findById(req.params.id);
    if(!transc) return res.status(404).json({message: 'Transacción no encontrada'});
    res.json(transc);
};
export const deleteRegister = async (req,res) => {
    const transc = await Transaction.findByIdAndDelete(req.params.id);
    if(!transc) return res.status(204).json({message: 'Transacción eliminada'});
    res.json(transc);
};