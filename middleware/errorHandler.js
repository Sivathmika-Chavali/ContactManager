const errorHandler = (err, req,res,nexxt)=>{
 const statusCode = res.statusCode ? res.statusCode :500;
 switch(statusCode){
    case 400: 
    res.json({message: err.message});
    break;
    case 404: 
    res.json({message: err.message});
    default:
    break;
 }
};
module.exports = errorHandler;