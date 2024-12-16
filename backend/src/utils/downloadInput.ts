import fs from 'fs';
import forceTwoDigits from './forceTwoDigits';

function downloadInput(day: number, year: number) {
    const cookie = process.env.SESSION_COOKIE;

    if (!cookie) {
        throw Error('SESSION_COOKIE is not set. Please set it in the .env file.');
    }

    if (!day) {
        throw Error("Parameter 'day' is missing.");
    }

    if (!year) {
        throw Error("Parameter 'year' is missing.");
    }

    // Set the URL
    const url = `https://adventofcode.com/${year}/day/${day}/input`;

    // Download the input file into the appropriate folder
    fetch(url, {
        headers: {
            Cookie: `session=${cookie}`,
        },
    })
        .then((response) => response.text())
        .then((data) => {
            const processedData = data;

            fs.writeFileSync(
                `./res/inputs/${year.toString()}${forceTwoDigits(day)}.txt`,
                processedData,
            );
        })
        .catch((error) => {
            throw Error(`Failed to download input for day ${day}: ${error}`);
        });

    console.log('Input for day $DAY downloaded successfully to $TARGET_DIR/input.txt');
}

export default downloadInput;
