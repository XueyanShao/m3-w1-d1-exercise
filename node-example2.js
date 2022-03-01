const { PI } = Math;  // private to this file

exports.area = (r) => PI * r ** 2;  // exported
exports.circumference = (r) => 2 * PI * r;  // exported

//if only one function to export we can write module.exports = area
