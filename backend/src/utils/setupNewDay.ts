import downloadInput from './downloadInput';

function setupNewDay(enforceDay?: number, enforceYear?: number) {
    // Get today's day number
    const today = enforceDay ? enforceDay : new Date().getDate();
    const year = enforceYear ? enforceYear : new Date().getFullYear();

    // Check if day is above 25
    if (today > 25) {
        throw Error(
            "The event is over! Hope you had a great time solving the puzzles. Now it's time to relax and enjoy the holiday season! 🎉",
        );
    }

    // Call download_input.sh script with the correct day number
    downloadInput(today, year);
}

export default setupNewDay;
