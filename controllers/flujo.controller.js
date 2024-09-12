const Flujo = require("../models/flujo");
const FlujoCtrl = {};

FlujoCtrl.getFlujos = async (req, res, next) => {
    try{
        const save = await Flujo.find();
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }
};

FlujoCtrl.getFlujo = async (req, res, next) => {
    try{
        const { id } = req.params;
        const save = await Flujo.findById(id);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
};

FlujoCtrl.SearchFlujo = async (req, res, next) => {
    try{
        const save = await Flujo.find()
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
}


FlujoCtrl.createFlujo = async (req, res, next) => {
    try{
        const { 
            name,
            description,
            square,
            conections,
            data,
        } = req.body;

        const body = { 
            name,
            description,
            square,
            conections,
            data,
};
        var save= await Flujo.create(body);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }


};

FlujoCtrl.editFlujo = async (req, res, next) => {
    try{
        const { id } = req.params;
        save = await Flujo.findByIdAndUpdate(id, {$set: req.body}, {new: true});
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
};


FlujoCtrl.deleteFlujo = async (req, res, next) => {
    try{
        // var flujo = await Flujo.findById(req.params.id);
        // if(flujo.files_id[0] != 'default.png'){
        //     await deleteImage(flujo.files_id[0]);
        // }
        // if(flujo.files_id[1] != ''){
        //     await deleteImage(flujo.files_id[1])
        // }
        await Flujo.findByIdAndRemove(req.params.id);
        res.json({ status: "Flujo Deleted" });
    }catch(err){
        res.status(400).send(err)
    }
};



module.exports = FlujoCtrl;