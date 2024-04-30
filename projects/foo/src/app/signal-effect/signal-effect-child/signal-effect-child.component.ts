import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'labs-signal-effect-child',
  standalone: true,
  imports: [],
  templateUrl: './signal-effect-child.component.html',
  styleUrl: './signal-effect-child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalEffectChildComponent {
  get cd(){
    console.log('cd');
    return 42;
  }
}
