const router = require("express").Router()
const Works = require("../models/works-model")
const Bids = require("../models/bids-model")

router.get("/workspending", (req, res)=>{
    Works.find().then(
        works =>{
            console.log(works)
            res.render("worksPending", {varWorks : works}) 
        } 
    )
})    
   

// Create a bid by user  
router.post("/createabid/:bidOnWorkId", (req, res)=>{
    const newBid = new Bids({
        keyBidOnWorkId : req.params.bidOnWorkId,
        keyBidByUserId : req.user.id,
        keyBidBudget : req.body.ipBudget, 
        keyBidDeadline : req.body.ipDeadline,
    })
    newBid.save().then(
        res.redirect("/workspending") 
    )
    .catch(error =>
        res.send(error)
    )
})
router.get("/viewbidsforworkid/:bidOnWorkId", (req, res)=>{
    const filterBids = Bids.find({keyBidOnWorkId: req.params.bidOnWorkId}).then(
        filteredBids =>{
            res.render("viewBidsForWorkId", {varBids : filteredBids })
        }
    )
    // console.log(req.params.bidOnWorkId)
})

module.exports = router;