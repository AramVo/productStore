import { Tag } from '../../db/models'

export function createTag(data) {
    return Tag.create(data);
}

export async function updateTag(data, id) {
    const tag = await Tag.findByPk(id);

    if (!tag) {
        throw new Error('Tag Not found')
    }

    await tag.update(data)
}

export async function deleteTag(id) {
    const tag = await Tag.findByPk(id);

    if (!tag) {
        throw new Error('Tag Not found')
    }

    await tag.destroy()
}