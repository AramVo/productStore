import { User } from './user';
import { Product } from './product';
import { Category } from './category';
import { Tag } from './tag';
import {ProductTag} from './ProductTag';

User.hasMany(Product, {
    foreignKey: {
        name: 'userId',
        allowNull: false,
    }
});
Product.belongsTo(User, { foreignKey: 'userId' });

Category.hasMany(Product, {
    foreignKey: {
        name: 'categoryId',
        allowNull: false,
        onDelete: 'RESTRICT'
    }
});
Product.belongsTo(Category, { foreignKey: 'categoryId' });

Category.hasMany(Category, { foreignKey: 'pId', onDelete: 'RESTRICT' });
Category.belongsTo(Category, { foreignKey: 'pId' });

Tag.belongsToMany(Product, { through: ProductTag });
Product.belongsToMany(Tag, { through: ProductTag });

export {
    User,
    Product,
    Category,
    Tag,
    ProductTag
}