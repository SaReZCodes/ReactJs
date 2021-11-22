const persons = [
    {
        id: 1001,
        name: 'saeed',
        family: 'rezaei',
        personCode: '100021',
        workplace: { id: 3, title: 'Ardabil' },
        gender: 'm',
        liked: true
    },
    {
        id: 1002,
        name: 'reza',
        family: 'mohammadi',
        personCode: '100022',
        workplace: { id: 3, title: 'Ardabil' },
        gender: 'm',
        liked: true
    },
    {
        id: 1003,
        name: 'mona',
        family: 'ahmadi',
        personCode: '100023',
        workplace: { id: 3, title: 'Ardabil' },
        gender: 'f',
        liked: false
    },
    {
        id: 1004,
        name: 'ali',
        family: 'joudi',
        personCode: '100024',
        workplace: { id: 10, title: 'Tehran' },
        gender: 'm',
        liked: false
    },
    {
        id: 1005,
        name: 'taher',
        family: 'ahmadzadeh',
        personCode: '100025',
        workplace: { id: 10, title: 'Tehran' },
        gender: 'm',
        liked: false
    },
    {
        id: 1006,
        name: 'mohsen',
        family: 'babaei',
        personCode: '100026',
        workplace: { id: 10, title: 'Tehran' },
        gender: 'm',
        liked: true
    },
    {
        id: 1007,
        name: 'sina',
        family: 'karimi',
        personCode: '100027',
        workplace: { id: 12, title: 'Esfehan' },
        gender: 'm',
        liked: false
    },
    {
        id: 1008,
        name: 'yashar',
        family: 'panahi',
        personCode: '100028',
        workplace: { id: 12, title: 'Esfehan' },
        gender: 'm',
        liked: false
    },
    {
        id: 1009,
        name: 'milad',
        family: 'mohsenzadeh',
        personCode: '100029',
        workplace: { id: 15, title: 'Yazd' },
        gender: 'm',
        liked: false
    },
    {
        id: 1010,
        name: 'fahime',
        family: 'shafighi',
        personCode: '100030',
        workplace: { id: 15, title: 'Yazd' },
        gender: 'f',
        liked: false
    },
    {
        id: 1011,
        name: 'kayvan',
        family: 'hajjari',
        personCode: '100031',
        workplace: { id: 15, title: 'Yazd' },
        gender: 'm',
        liked: false
    },
];

export function getPersons() {
    return persons.filter(x => x);
}