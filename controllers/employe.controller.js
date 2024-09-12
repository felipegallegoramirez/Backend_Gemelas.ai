const Employe = require("../models/employe");
const EmployeCtrl = {};

EmployeCtrl.getEmployes = async (req, res, next) => {
    try{
        const save = await Employe.find();
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }
};

EmployeCtrl.getEmploye = async (req, res, next) => {
    try{
        const { id } = req.params;
        const save = await Employe.findById(id);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
};

EmployeCtrl.SearchEmploye = async (req, res, next) => {
    try{
        const save = await Employe.find()
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
}


EmployeCtrl.createEmploye = async (req, res, next) => {
    try{
        const { name,
            description,
            skills,
            state,
            flujo_id,
            user_id
        } = req.body;

        const body = { 
            name,
            description,
            skills,
            state,
            flujo_id,
            user_id
};
        var save= await Employe.create(body);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }


};

EmployeCtrl.editEmploye = async (req, res, next) => {
    try{
        const { id } = req.params;
        save = await Employe.findByIdAndUpdate(id, {$set: req.body}, {new: true});
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
};


EmployeCtrl.deleteEmploye = async (req, res, next) => {
    try{
        // var employe = await Employe.findById(req.params.id);
        // if(employe.files_id[0] != 'default.png'){
        //     await deleteImage(employe.files_id[0]);
        // }
        // if(employe.files_id[1] != ''){
        //     await deleteImage(employe.files_id[1])
        // }
        await Employe.findByIdAndRemove(req.params.id);
        res.json({ status: "Employe Deleted" });
    }catch(err){
        res.status(400).send(err)
    }
};



module.exports = EmployeCtrl;