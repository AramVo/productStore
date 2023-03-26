import { User } from './users.js';
import { Product } from './product.js';
import { Category } from './category.js';
import { Tag } from './tag.js';

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
    }
});
Product.belongsTo(Category, { foreignKey: 'categoryId' });

Category.hasMany(Category, { foreignKey: 'pId' });
Category.belongsTo(Category, { foreignKey: 'pId' });

Tag.belongsToMany(Product, { through: 'ProductTag' });
Product.belongsToMany(Tag, { through: 'ProductTag' });

export {
    User,
    Product,
    Category,
}