const suma = (a,b) => {
    if (a === undefined || b === undefined) return { error: { message: "Params are required" } };
    if (a === null || b === null) return { error: { message: "It can't add null values" } };
    if (typeof(a) == 'function' || typeof(b) == 'function') return { error: { message: "It can't add functions" } };
    if (typeof(a) == 'object' || typeof(b) == 'object') return { error: { message: "It can't add objects" } };
    if (isNaN(a) || isNaN(b)) return { error: { message: "It can't add strings" } };
    if (a < 0 || b < 0) return { error: { message: "It can't add negative numbers" } }
    if (!Number.isInteger(a) || !Number.isInteger(b)) return { error: { message: "It can't add float numbers" } };
    return a + b;
}

module.exports = suma;