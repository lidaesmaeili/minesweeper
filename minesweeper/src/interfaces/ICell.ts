import { Content } from '../enum/Content';

export interface ICell {
    isOpened: boolean;
    content: Content;
    hasMine: boolean;
    adjacentMinesCount:number;
}