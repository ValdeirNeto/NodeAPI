import Bill from './../schema/Bill'

export default (req, res ) => {
    let bill = new Bill(req.body)
    
    bill
        .findByIdAndRemove(res.params.id)
        .then(() => res.status(204).end())
        .catch(err => res.status(500)
                        .json({ status: false, data: {} }))
}