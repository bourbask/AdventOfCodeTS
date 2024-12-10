import * as fs from 'fs';
import * as path from 'path';

// calcTotalDistanceBetweenLists
export const script = (): number => {
    const inputFile = path.join(__dirname, '..', 'res/inputs', '202401.txt');

    // Get relevant values using regex
    const inputContent = fs.readFileSync(inputFile, 'utf-8');
    const getIdsFromInput = inputContent.match(/\d+/g);

    if (!getIdsFromInput) {
        console.error('No matches found in input file');
        process.exit(1);
    }

    const list1: number[] = [];
    const list2: number[] = [];

    let index = 0;
    for (const value of getIdsFromInput) {
        if (index % 2 === 0) {
            list1.push(parseInt(value));
        } else {
            list2.push(parseInt(value));
        }
        index++;
    }

    // Sort each list from smaller to larger numbers
    const sortedList1 = list1.sort((a, b) => a - b);
    const sortedList2 = list2.sort((a, b) => a - b);

    // Measure length between tuples
    let length = 0;

    for (let i = 0; i < sortedList1.length; i++) {
        const absDiff = Math.abs(sortedList1[i] - sortedList2[i]);

        length += absDiff;
    }

    return length;
};
