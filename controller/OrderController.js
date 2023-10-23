const Orders = require("../modles/Orders");

const orderController = async (req, res) => {
    try {
        const { seller_id } = req.params
        const { itemName, itemPic, price, buyerId } = req.body;
        const OrderItem = new Orders({
            itemName,
            itemPic,
            price,
            buyerId,
            sellerId: seller_id
        })
        await OrderItem.save();
        return res.status(200).send({
            success: true,
            message: "Order successfully save",
            OrderItem
        })
    } catch (err) {
        console.log(err)
        return res.status(500).send({
            success: false,
            message: "Error in Order API",
        })
    }
}
module.exports = { orderController };