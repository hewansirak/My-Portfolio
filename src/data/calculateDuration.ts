
export function calculateDuration(startDateStr: string, endDateStr: string): string {
    const start = new Date(startDateStr + '-01'); // To avoid timezone issues
    const end = endDateStr === 'Present' ? new Date() : new Date(endDateStr + '-01');

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    const yearString = years > 0 ? `${years} year${years === 1 ? '' : 's'}` : '';
    const monthString = months > 0 ? `${months} month${months === 1 ? '' : 's'}` : '';

    if (years === 0 && months === 0) {
        return 'One month'; 
    } else if (yearString && monthString) {
        return `${yearString} ${monthString}`;
    } else if (yearString) {
        return yearString;
    } else {
        return monthString;
    }
}
