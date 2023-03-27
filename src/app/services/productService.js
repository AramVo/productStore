import { Product } from '../../db/models'

export function createProduct(data, userId) {
    data.userId = userId;
    return Product.create(data);
}

