import img0 from '../assets/images/tablo/0.png';
import img1 from '../assets/images/tablo/1.png';
import img2 from '../assets/images/tablo/2.png';
import img3 from '../assets/images/tablo/3.png';
import img4 from '../assets/images/tablo/4.png';
import img5 from '../assets/images/tablo/5.png';
import img6 from '../assets/images/tablo/6.png';
import img7 from '../assets/images/tablo/7.png';
import img8 from '../assets/images/tablo/8.png';
import img9 from '../assets/images/tablo/9.png';

import imgA from '../assets/images/tablo/a.png';
import imgB from '../assets/images/tablo/b.png';
import imgK from '../assets/images/tablo/k.png';
import imgM from '../assets/images/tablo/m.png';
import imgH from '../assets/images/tablo/h.png';
import imgP from '../assets/images/tablo/p.png';
import imgC from '../assets/images/tablo/c.png';
import imgT from '../assets/images/tablo/t.png';


export type TaskImages = Record<
    '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' |
    'a' | 'b' | 'k' | 'm' | 'h' | 'p' | 'c' | 't',
    string
>;

export type TaskSymbol = keyof TaskImages;
export const taskImages: TaskImages  = {
    '0': img0,
    '1': img1,
    '2': img2,
    '3': img3,
    '4': img4,
    '5': img5,
    '6': img6,
    '7': img7,
    '8': img8,
    '9': img9,
    'a': imgA,
    'b': imgB,
    'k': imgK,
    'm': imgM,
    'h': imgH,
    'p': imgP,
    'c': imgC,
    't': imgT
};
