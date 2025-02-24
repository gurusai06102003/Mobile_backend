const Mobile = require('../Models/mobiles');
const getAllMobiles = async (req,res)=>{
    try{
        const allMobiles = await Mobile.find({});
        if(allMobiles?.length>0){
            res.status(201).json(allMobiles);
        }
        else{
            console.log('Mobiles not available');
            res.status(201).json({
                message:"MObiles not available"
            })
        }
    }catch(e){
        console.log('error at get/ method ',e);
        res.status(501).json({
            message:"please try again",
            status: 501
        })
    }
}
const getMobileModelNames = async (req,res)=>{
    try{
        const brandnames = await Mobile.distinct("brand_name");
        if(brandnames.length>0){
            res.send(brandnames);
        }
        else{
            console.log('Mobiles not available');
            res.status(201).json({
                message:"MObiles not available"
            })
        }
    }catch(e){
        console.log('error at get/mobilebrands method ',e);
        res.status(501).json({
            message:"please try again",
            status: 501
        })
    }
}
const getMobileModels = async (req,res)=>{
    try{
        const reqModelCompany = req.params.brand_name;
        if(!reqModelCompany){
            res.status(404).json({
                message:"model name is required"
            })
        }
        const totalmobiles = await Mobile.find({});
        const mobiles = [];
        for(let tm of totalmobiles){
            if(tm.brand_name===reqModelCompany){
                mobiles.push(tm.model);
            }
        }
        if(mobiles.length>0){
            res.status(200).json(mobiles);
        }
        else{
            res.status(404).json({
                message:'mobiles not found',
                brandname:`${reqModelCompany}`
            })
        }
    }
    catch(e){
        res.status(500).json({
            message:"server error"
        })
    }
}
const getMobileDetails = async(req,res)=>{
    try{
        const reqMobile = req.params.model;
        if(!reqMobile){
            res.status(404).json({
                message:"mobile model name is required"
            })
        }
        const tmobiles = await Mobile.find({});
        const reqMobileModel = [];
        for(let tm of tmobiles){
            if(tm.model===reqMobile){
                reqMobileModel.push(tm);
            }
        }
        if(reqMobileModel.length>0){
            res.status(200).send(reqMobileModel);
        }
        else{
            res.status(404).json({
                message:"mobiles not found"
            })
        }
    }
    catch(e){
        res.status(500).json({
            message:"server error"
        })
    }
}
module.exports = {getAllMobiles,getMobileModelNames,getMobileModels,getMobileDetails};