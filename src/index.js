// Вы должны реализовать свою задачу здесь.

module.exports = function towelSort(matrix) {
    if (matrix == undefined || matrix == "") {
        return [];
    }

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 !== 0) {
            matrix[i].reverse();
        }
    }

    let result = matrix.reduce(function(a, b) {
        return a.concat(b);
    });

    return result;
};
