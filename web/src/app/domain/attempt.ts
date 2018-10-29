import { Track } from './track';

export interface Attempt {
    success: boolean;
    track: Track;
    note: string;
}
