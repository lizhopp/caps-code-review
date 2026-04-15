import { addTree, getTrees } from "../data/database.js";
import { createHttpError } from "../utils/httpError.js";

/**
 * Returns all saved skill trees.
 */
export async function getUserTrees(request, response, next) {
  try {
    const trees = await getTrees();
    response.json({ trees });
  } catch (error) {
    next(error);
  }
}

/**
 * Creates a new skill tree.
 */
export async function createUserTree(request, response, next) {
  try {
    const { title, description } = request.body;

    if (!title) {
      throw createHttpError(400, "Tree title is required.");
    }

    const tree = await addTree({ title: title.trim(), description: description?.trim() || "" });

    response.status(201).json({ tree });
  } catch (error) {
    next(error);
  }
}
