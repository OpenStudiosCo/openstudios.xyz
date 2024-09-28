/**
 * Reusable modular helpers.
 */

/**
 * Use the bounding box to calculate the width of a mesh.
 * 
 * @param {*} mesh 
 * @returns float
 */
export function getMeshWidth( mesh ) {
    mesh.geometry.computeBoundingBox();
    const boundingBox = mesh.geometry.boundingBox;

    // Step 4: Extract dimensions from bounding box
    const width = boundingBox.max.x - boundingBox.min.x;

    return width;
}
