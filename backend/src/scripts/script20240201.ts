import * as fs from 'fs';
import * as path from 'path';

// Utility function: Calculate the absolute difference
const absolute = (num: number): number => Math.abs(num);

// Main script
export const script = (): number => {
    const inputFile = path.join(__dirname, '../..', 'res/inputs', '202402.txt');

    // Extract data by reports
    const listOfReports: string[] = fs.readFileSync(inputFile, 'utf-8').trim().split('\n');

    // Extract numbers per report
    const reportsCount = listOfReports.length;
    const reportArrays: Record<string, number[]> = {};

    listOfReports.forEach((report, index) => {
        // Extract numbers using regex
        const numbers = (report.match(/\d+/g) || []).map(Number);
        reportArrays[`report_${index}`] = numbers;
    });

    // Process adjacent levels in reports
    let safeReportsCount = reportsCount;

    Object.entries(reportArrays).forEach(([key, levels], index) => {
        const levelsCount = levels.length;
        let isIncreasing: boolean | null = null;

        for (let j = 0; j < levelsCount - 1; j++) {
            const currentLevel = levels[j];
            const nextLevel = levels[j + 1];

            if (currentLevel === nextLevel) {
                safeReportsCount--;
                break;
            }

            // Determine the increasing or decreasing trend
            if (isIncreasing === null) {
                isIncreasing = currentLevel < nextLevel;
            } else if (
                (isIncreasing && currentLevel >= nextLevel) ||
                (!isIncreasing && currentLevel < nextLevel)
            ) {
                safeReportsCount--;
                break;
            }

            const absDiff = absolute(currentLevel - nextLevel);

            if (absDiff < 1 || absDiff > 3) {
                safeReportsCount--;
                break;
            }
        }
    });

    return safeReportsCount;
};
