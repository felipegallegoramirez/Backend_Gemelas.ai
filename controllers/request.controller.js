const Request = require("../models/request");
const RequestCtrl = {};

RequestCtrl.getRequests = async (req, res, next) => {
    try{
        const save = await Request.find();
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }
};

RequestCtrl.getRequest = async (req, res, next) => {
    try{
        const { id } = req.params;
        const save = await Request.findById(id);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
};

RequestCtrl.SearchRequest = async (req, res, next) => {
    try{
        const save = await Request.find()
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
}


RequestCtrl.createRequest = async (req, res, next) => {
    try{
        const { 
            conversation,
            calification,
            summary,
            points,
            external,
            user_id,
            response_id,
            employe_id,
        } = req.body;

        const body = { 
            conversation,
            calification,
            summary,
            points,
            external,
            user_id,
            response_id,
            employe_id,
};
        var save= await Request.create(body);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }


};

RequestCtrl.editRequest = async (req, res, next) => {
    try{
        const { id } = req.params;
        save = await Request.findByIdAndUpdate(id, {$set: req.body}, {new: true});
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
};


RequestCtrl.deleteRequest = async (req, res, next) => {
    try{
        // var request = await Request.findById(req.params.id);
        // if(request.files_id[0] != 'default.png'){
        //     await deleteImage(request.files_id[0]);
        // }
        // if(request.files_id[1] != ''){
        //     await deleteImage(request.files_id[1])
        // }
        await Request.findByIdAndRemove(req.params.id);
        res.json({ status: "Request Deleted" });
    }catch(err){
        res.status(400).send(err)
    }
};



module.exports = RequestCtrl;