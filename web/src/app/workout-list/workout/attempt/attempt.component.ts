import {Component, Input} from '@angular/core';
import {Attempt} from '../../../domain/attempt';

@Component({
  selector: 'app-attempt',
  templateUrl: './attempt.component.html',
  styleUrls: ['./attempt.component.css']
})
export class AttemptComponent {
    @Input() content: Attempt;

}
