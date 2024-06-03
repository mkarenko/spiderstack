import {atom} from 'recoil';

export const colorsOfSuitsAtom = atom<number>({
	key: 'colorsOfSuitsAtom',
	default: 1,
});
