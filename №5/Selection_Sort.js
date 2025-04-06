function SS(row) {
    const swap = (row, index1, index2) => {
        [row[index1], row[index2]] = [row[index2], row[index1]];
    };
    for (let i = 0; i < row.length; i++) {
        let smallest = i;
        for (let j = i + 1; j < row.length; j++) {
            if (row[j] < row[smallest]) {
                smallest = j;
            }
        }
        if (i !== smallest) {
            swap(row, i, smallest);
        }
    }
}

const array = [
    [12, 34, 56, 78, 90, 23, 45, 67],
    [89, 12, 34, 56, 78, 90, 23, 45],
    [67, 89, 12, 34, 56, 78, 90, 23],
    [45, 67, 89, 12, 34, 56, 78, 90],
    [23, 45, 67, 89, 12, 34, 56, 78],
    [90, 23, 45, 67, 89, 12, 34, 56],
    [78, 90, 23, 45, 67, 89, 12, 34],
    [56, 78, 90, 23, 45, 67, 89, 12]
];

for (let i = 0; i < array.length; i++) {
    SS(array[i]);
}

console.log(array);
