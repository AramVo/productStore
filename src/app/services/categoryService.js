import { Category } from '../../db/models'

export function createCategory(data) {
    return Category.create(data);
}

export async function updateCategory(data, id) {
    const category = await Category.findByPk(id);
    
    if (data.pId == id) {
        throw new Error('Invalid id')
    }

    if (!category) {
        throw new Error('Category Not found')
    }

    await category.update(data)
}

export async function deleteCategory(id) {
    const category = await Category.findByPk(id);

    if (!category) {
        throw new Error('Category Not found')
    }

    await category.destroy()
}