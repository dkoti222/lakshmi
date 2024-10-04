import { ImageSourcePropType } from 'react-native';

export type Data = {
    id: number;
    name: string;
    location: string;
    image: ImageSourcePropType;
    about: string;
};
const data: Data[] = [
    {
        id: 1,
        name: 'Kelingking Beach',
        location: 'Bali, Indonesia',
        image: require('../../assets/images/KelingkingBeach.jpg'),

        about:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis nulla tortor, at viverra augue venenatis eget. Nam magna ligula, consequat sit amet purus eu, eleifend maximus elit. Aliquam rhoncus fringilla venenatis. In pulvinar lacus quis urna suscipit, placerat commodo turpis molestie. Cras tristique suscipit nisl, eu porttitor ex.',
    },
    {
        id: 2,
        name: 'Diamond Beach',
        location: 'Bali, Indonesia',
        image: require('../../assets/images/DiamondBeach.jpg'),

        about:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis nulla tortor, at viverra augue venenatis eget. Nam magna ligula, consequat sit amet purus eu, eleifend maximus elit. Aliquam rhoncus fringilla venenatis. In pulvinar lacus quis urna suscipit, placerat commodo turpis molestie. Cras tristique suscipit nisl, eu porttitor ex.',
    },
    {
        id: 3,
        name: 'Canggu Beach',
        location: 'Bali, Indonesia',
        image: require('../../assets/images/CangguBeach.jpg'),

        about:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis nulla tortor, at viverra augue venenatis eget. Nam magna ligula, consequat sit amet purus eu, eleifend maximus elit. Aliquam rhoncus fringilla venenatis. In pulvinar lacus quis urna suscipit, placerat commodo turpis molestie. Cras tristique suscipit nisl, eu porttitor ex.',
    },
    {
        id: 4,
        name: 'Broken Beach',
        location: 'Bali, Indonesia',
        image: require('../../assets/images/BrokenBeach.jpg'),
        about:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis nulla tortor, at viverra augue venenatis eget. Nam magna ligula, consequat sit amet purus eu, eleifend maximus elit. Aliquam rhoncus fringilla venenatis. In pulvinar lacus quis urna suscipit, placerat commodo turpis molestie. Cras tristique suscipit nisl, eu porttitor ex.',
    },
];

export default data;