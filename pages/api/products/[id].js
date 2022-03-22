import dbConnect from '../../../util/mongo';
import Product from '../../../models/Product';

export default async function handler(req, res) {
    const { 
        method,
        query: {id},
        cookies,
    } = req;
    
    dbConnect();
    
    if(method === 'GET'){
        try {
            const product = await Product.findById(id);
            res.status(200).json(product)
        } catch (err) {
            res.status(500).json(err);
        }
    }
 
    if(method === 'POST') {
        try {
            const product = await Product.create(req.body);
            res.status(200).json(product);
        } catch(err) {
            res.status(500).json(err);
        }
    }

    if(method === 'PUT'){
        try {
            // usamos new: true para devolver el producto actulizado con los valores ya que lo suamos en la vista
            const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
            res.status(200).json(product)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    if(method === 'DELETE') {
        try {
            await Product.findByIdAndDelete(id);
            res.status(200).json('The product has been deleted');
        } catch(err) {
            res.status(500).json(err);
        }
    }
    
  }
  