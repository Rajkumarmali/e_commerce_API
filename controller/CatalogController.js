const Catalogs = require("../modles/Catalog");
const Orders = require("../modles/Orders");

const catalogController = async (req, res) => {
    try {
        const catalog = new Catalogs(req.body)
        await catalog.save();
        return res.status(201).send({
            success: true,
            message: "Successfull create Catalog",
            catalog
        })
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            success: false,
            message: "Error in create Catalog API",
            err
        })
    }
}

const getCatalogController = async (req, res) => {
    try {
        const sellerId = req.params.seller_id;
        // console.log(sellerId)
        const catalog = await Catalogs.find({ sellerId: sellerId });
        return res.status(201).send({
            success: true,
            message: "SuccessFully get catalog ",
            catalog
        })
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            success: false,
            message: "Error get Catalog API"
        })
    }
}
const getOrderController = async (req, res) => {
    try {
        const sellerId = req.body.sellerId
        const orders = await Orders.find({ sellerId: sellerId })
        return res.status(201).send({
            success: true,
            message: "Successfully get orders List",
            orders
        })
    } catch (err) {
        console.log(err)
        return res.status(500).send({
            success: false,
            message: "Error in get orderList API",
        })
    }
}

module.exports = { catalogController, getCatalogController, getOrderController }