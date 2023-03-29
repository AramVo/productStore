import { Op } from 'sequelize';

import { Product, Tag, ProductTag } from '../../db/models'

export async function createProduct(data, userId) {
    data.userId = userId;
    const { tags } = data;
    delete data.tags

    const product = await Product.create(data);

    if (tags?.length) {
        const dbTags = await Tag.findAll({
            where: {
                id: { [Op.in]: tags}
            }
        });

        product.addTags(dbTags, { through: ProductTag })
    }
}

export async function updateProduct(data, id) {
    const product = await Product.findByPk(id);

    if (product.userId != id) {
        throw new Error('Can\'t update others products')
    }

    if (!product) {
        throw new Error('roduct Not found')
    }

    await product.update(data)
}

