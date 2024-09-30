const Response = require("../models/response");
const Survey = require("../models/survey");

const ResponseCtrl = {};

ResponseCtrl.getResponses = async (req, res, next) => {
    try{
        const save = await Response.find();
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }
};

ResponseCtrl.getResponse = async (req, res, next) => {
    try{
        const { id } = req.params;
        const save = await Response.findById(id);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
};

ResponseCtrl.SearchResponse = async (req, res, next) => {
    try{
        await Response.find({ survey_id: req.params.id });
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
}


ResponseCtrl.createResponse = async (req, res, next) => {
    try{
        const { 
            answers,
            state,
            user_id,
            survey_id,
            employe_id } = req.body;

             
            let survey = await Survey.findById(survey_id)
            let open = true
            let count = 0

            for (let i = 0; i < survey.data.length; i++) {
                const element = survey.data[index];
                if (element.type == 1){
                    open=true
                }else{
                    if(answers[i] == element){
                        count++;
                    }
                }
            }

            let points = survey.points * ( count / survey.data.length)


            if(!open){
                state = 'ended'

            }else{
                state = 'open'
            }

            let calification = ( count / survey.data.length) * 100




        const body = {            
            answers,
            calification,
            points,
            state,
            user_id,
            survey_id,
            employe_id};
        var save= await Response.create(body);
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)

    }


};

/*
ResponseCtrl.QualifedResponse = async (req, res, next) => {
    try{
        const { id , count } = req.params;
        const response = await Response.findById(id);

        let survey = await Survey.findById(response.survey_id)

        let points = survey.points * ( count / survey.data.length)
        survey.state = 'ended'
        survey.points+=points
        survey.calification = ( count / survey.data.length) * 100

        user= await User.findById(response.user_id)

        reward = await Reward.findById(event.reward_id)

        let index = reward.users.findIndex(objeto => objeto.user_id === user._id);

        if (index === -1) {
            reward.users.push({
                user_id: user._id,
                user_name: user.name,
                user_email: user.email,
                points: points
            });
          } else {
            reward.users[index]+=points
        }

        user.points +=  points


        await User.findByIdAndUpdate(user._id,user)
        await reward.findById(reward._id,reward)

        const save = await Response.findByIdAndUpdate(id,response)

      
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
};*/

ResponseCtrl.editResponse = async (req, res, next) => {
    try{
        const { id } = req.params;
        save = await Response.findByIdAndUpdate(id, {$set: req.body}, {new: true});
        res.status(200).send(save)
    }catch(err){
        res.status(400).send(err)
    }
};

ResponseCtrl.deleteResponse = async (req, res, next) => {
    try{
        await Response.findByIdAndRemove(req.params.id);
        res.json({ status: "Response Deleted" });
    }catch(err){
        res.status(400).send(err)
    }
};



module.exports = ResponseCtrl;