import * as fs from 'fs';
import * as path from 'path';

// Parse input file and extract numbers
const extractInputNumbers = (inputFile: string): number[] => {
    const inputContent: string = fs.readFileSync(inputFile, 'utf-8');
    const matches = inputContent.match(/\d+/g);

    if (!matches) {
        console.error('No matches found in input file');
        process.exit(1);
    }

    return matches.map(Number);
};

// Separate numbers into two lists
const separateLists = (numbers: number[]): [number[], number[]] => {
    const list1: number[] = [];
    const list2: number[] = [];

    numbers.forEach((value, index) => {
        if (index % 2 === 0) {
            list1.push(value);
        } else {
            list2.push(value);
        }
    });

    return [list1, list2];
};

// Remove duplicates from a list and sort it
const getUniqueSortedList = (list: number[]): number[] => {
    return Array.from(new Set(list)).sort((a, b) => a - b);
};

// Calculate the score for each unique ID based on occurrences in list2
const calculateScores = (uniqueList: number[], list2: number[]): Record<number, number> => {
    const scoreById: Record<number, number> = {};

    uniqueList.forEach((id) => {
        const countInList2 = list2.filter((item) => item === id).length;
        scoreById[id] = id * countInList2;
    });

    return scoreById;
};

// Calculate the total score
const calculateTotalScore = (scoreById: Record<number, number>): number => {
    return Object.values(scoreById).reduce((total, score) => total + score, 0);
};

// Main script
export const script = (): number => {
    const inputFile = path.join(__dirname, '..', 'res/inputs', '202401.txt');

    const numbers = extractInputNumbers(inputFile);

    const [list1, list2] = separateLists(numbers);

    const uniqueSortedList1 = getUniqueSortedList(list1);

    const scoreById = calculateScores(uniqueSortedList1, list2);

    const totalScore = calculateTotalScore(scoreById);

    return totalScore;
};
