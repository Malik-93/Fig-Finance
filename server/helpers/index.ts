export const uniqueIdGenerator = () => {
    // 4 digits Id
    return Math.floor(Math.random() * (9000 - 1000 + 1)) + 1000;
};

export const randomStringGenerator = () => {
    return (Math.random() + 1).toString(36).substring(1);
};

export const randomCategoryGenerator = () => {
    let arr = ['Nodejs', 'Express', 'Mongodb', 'React', 'Redux'];
    return arr[Math.floor(Math.random() * arr.length)];
};
function getRandomElement(array) {
    if (array instanceof Array)
        return array[Math.floor(Math.random() * array.length)];
    else return array;
}
export const randomAddressGenerator = () => {
    var streetNumber = ['25489', '87459', '35478', '15975', '95125', '78965'];
    var streetName = [
        'A street',
        'B street',
        'C street',
        'D street',
        'E street',
        'F street',
    ];
    var cityName = [
        'Riyadh',
        'Dammam',
        'Jedda',
        'Tabouk',
        'Makka',
        'Maddena',
        'Haiel',
    ];
    var stateName = [
        'Qassem State',
        'North State',
        'East State',
        'South State',
        'West State',
    ];
    var zipCode = ['28889', '96459', '35748', '15005', '99625', '71465'];

    var template = [
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
