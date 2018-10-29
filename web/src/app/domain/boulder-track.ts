import { Track } from './track';
import { Colour } from './colour';

export interface BoulderTrack extends Track {
    secondaryColour: Colour;
    number: number;
}
