const workPlaces = [
    {
        id: 3, title: 'Ardabil',
        id: 10, title: 'Tehran',
        id: 12, title: 'Esfehan',
        id: 15, title: 'Yazd',
    }
];

export function getWorkPlaces() {
    return workPlaces.filter(x => x);
}