function forceTwoDigits(value: string | number): string {
    return String(value).padStart(2, '0');
}

export default forceTwoDigits;
