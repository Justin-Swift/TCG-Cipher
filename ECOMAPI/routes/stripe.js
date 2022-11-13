const router = require("express").Router();
const paypal = require("paypal")(process.env.Client_ID);

router.post("/payment", (req,res)=>{
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
    }, (paypalErr, paypalRes)=>{
        if(paypalErr){
            res.status(500).json(paypalErr);
        }else{
            res.status(200).json(paypalRes);
        }
    });
});
module.exports = router;