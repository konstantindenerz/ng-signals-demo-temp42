import {ChangeDetectionStrategy, Component, computed, effect, signal, untracked} from '@angular/core';
import {SignalEffectChildComponent} from './signal-effect-child/signal-effect-child.component';


@Component({
  selector: 'labs-signal-effect',
  standalone: true,
  imports: [
    SignalEffectChildComponent
  ],
  templateUrl: './signal-effect.component.html',
  styleUrl: './signal-effect.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SignalEffectComponent {
  counter = signal(0);
  double = computed(() => this.counter() * 2);
  computedSignalWithError = computed(() => {
    // throw Error('bubu');
    return this.counter() * 2;
  });

  trueValue = signal(true);
  aValue = signal(42);
  bValue = signal(5);
  resultValue = signal(0);

  result2Value = signal(1);


  constructor() {
    effect(() => {
      console.log('🔥 first effect is called', this.double());
    });

    this.result2Value.update((value) => value - 4)
    // effect(() => {
    //   console.log('second effect is called', this.computedSignalWithError());
    // });


    effect(() => {
      // this.bValue(); to track
      console.log('✅ effect with condition');
      if (this.trueValue()) {
        console.log('aValue', this.aValue())
        this.resultValue.set(this.aValue())
      } else {
        console.log('bValue', this.bValue())
        this.resultValue.set(this.bValue())
      }
    }, {allowSignalWrites: true});

    effect(() => {
        // 😱 infinite loop error without untracked
        untracked(() => console.log('✨ resultValue effect ', this.resultValue()));
        this.aValue.update(value => value + 1);
      }
      , {allowSignalWrites: true}
    )
  }

  increase() {
    this.counter.update(value => value + 1);
  }

  increaseA() {
    this.aValue.set(this.aValue() + 1);
  }

  increaseB() {
    this.bValue.set(this.bValue() + 1);
  }

  increaseResult2Value() {
    this.result2Value.update((value) => Math.cos(360 / 10) * value);
  }

}
