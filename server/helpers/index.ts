export const uniqueIdGenerator = () => {
    // 4 digits Id
    return Math.floor(Math.random() * (9000 - 1000 + 1)) + 1000;
};

export const randomStringGenerator = () => {
    return (Math.random() + 1).toString(36).substring(1);
};

export const randomCategoryGenerator = () => {
    const arr = ['Nodejs', 'Express', 'Mongodb', 'React', 'Redux'];
    return arr[Math.floor(Math.random() * arr.length)];
};
function getRandomElement(array) {
    if (array instanceof Array)
        return array[Math.floor(Math.random() * array.length)];
    else return array;
}
export const randomAddressGenerator = () => {
    const streetNumber = ['25489', '87459', '35478', '15975', '95125', '78965'];
    const streetName = [
        'A street',
        'B street',
        'C street',
        'D street',
        'E street',
        'F street',
    ];
    const cityName = [
        'Riyadh',
        'Dammam',
        'Jedda',
        'Tabouk',
        'Makka',
        'Maddena',
        'Haiel',
    ];
    const stateName = [
        'Qassem State',
        'North State',
        'East State',
        'South State',
        'West State',
    ];
    const zipCode = ['28889', '96459', '35748', '15005', '99625', '71465'];

    const template = [
        streetNumber,
        ' ',
        streetName,
        ', ',
        cityName,
        ' ',
        stateName,
        ', ',
        zipCode,
    ];
    return template.map(getRandomElement).join('');
};
