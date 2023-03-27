import * as tagService from '../services/tagService';

export async function createTag(req, res, next) {
    try {
        await tagService.createTag(req.body);

        res.send({ success: true });
    } catch (err) {
        next(err)
    }
}

export async function updateTag(req, res, next) {
    try {
        await tagService.updateTag(req.body, req.params.id);

        res.send({ success: true });
    } catch (err) {
        next(err)
    }
}

export async function deleteTag(req, res, next) {
    try {
        await tagService.deleteTag(req.params.id);

        res.send({ success: true });
    } catch (err) {
        next(err)
    }
}
