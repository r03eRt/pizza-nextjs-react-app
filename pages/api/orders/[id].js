import dbConnect from '../../../util/mongo';
import Order from '../../../models/Order';

export default async function handler(req, res) {
    const { method, query: {id} } = req;
    
    dbConnect();
    
    if(method === 'GET'){
        try {
            const order = await Order.findById(id);
            res.status(200).json(order)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    if(method === 'POST') {
        try {
            const order = await Order.create(req.body);
            res.status(200).json(order);
        } catch(err) {
            res.status(500).json(err);
        }
    }

    if(method === 'PUT'){
        try {
            // usamos new: true para devolver el producto actulizado con los valores ya que lo suamos en la vista
            const order = await Order.findByIdAndUpdate(id, req.body, { new: true });
            res.status(200).json(order)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    if(method === 'DELETE') {
        try {
            await Order.findByIdAndDelete(id);
            res.status(200).json('The order has been deleted');
        } catch(err) {
            res.status(500).json(err);
        }
    }
 
   
  }
  