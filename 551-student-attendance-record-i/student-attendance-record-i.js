function checkRecord(s) {
    const absentCount = s.split('A').length - 1;
    const lateStreak = s.includes('LLL');
    return absentCount < 2 && !lateStreak;
}