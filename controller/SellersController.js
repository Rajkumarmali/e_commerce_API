const Users = require("../modles/Users")

const sellerController = async (req, res) => {
    try {
        const seller = await Users.find({ role: "sellers" })
        return res.status(200).send({
            success: true,
            message: "Seller list",
            Total: seller.length,
            seller
        })
    } catch (err) {
        console.log(err)
        return res.status(500).send({
            success: false,
            message: "Errer in get Seller List",
            err
        })
    }
}

module.exports = { sellerController }