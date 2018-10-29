import { Difficulty } from './difficulty';
import { Track } from './track';

export interface SecuredTrack extends Track {
    difficulty: Difficulty;
}
