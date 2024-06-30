import md5 from "md5"

export const hashing = async (req, res) => {
    const values = req.body.values;
    const { merchantId, orderId, amount, currency } = values;
    try {
        var hash = md5(
            merchantId +
            orderId +
            amount +
            currency +
            md5(
                process.env.MERCHANT_SECRET
            ).toUpperCase()
        ).toUpperCase();
        console.log("hash", hash)
        res.status(200).send({ hash });
    } catch (e) {
        res.status(500).send({ error: e });
    }

}