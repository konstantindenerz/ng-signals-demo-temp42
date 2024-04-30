import {booleanAttribute, Component, computed, input, model} from '@angular/core';


@Component({
  selector: 'labs-signal-decorators-child',
  standalone: true,
  imports: [],
  templateUrl: './signal-decorators-child.component.html',
  styleUrl: './signal-decorators-child.component.scss',
  host: {
    '[class.disabled]': 'disabled()'
  }
})
export class SignalDecoratorsChildComponent {
  description = input<string>();
  pageId = input.required<string>();
  disabled = input<boolean, string>(false, {transform: booleanAttribute})
  dynamicValue = computed(() => `${this.pageId()} - ${Date.now()}`)
  counter = model(42);

  increaseCounter() {
    this.counter.update((value) => value + 1)
  }
}
