import { Component, State } from '@stencil/core';
import { Observable } from "rxjs";
import { scan } from "rxjs/operators";

import Stream from "./stream";
// import Subscribe from "./subscribe";

@Component({
  tag: 'rx-demo'
})
export class Demo {
  @State() text: string = 'Count Is';
  @State() count: number;

  @Stream() textChange$: Observable<Event> & ((event: Event) => void);
  @Stream() click$: Observable<MouseEvent> & ((e: MouseEvent) => void);

  // @Subscribe('keydown')
  keydown(stream$) {
    stream$.subscribe((event) => {
      console.log(event);
    })
  }

  componentDidLoad() {
    this.click$.pipe(
      scan((count) => count + 1, 0)
    ).subscribe((count: number) => {
      this.count = count;
    });

    this.textChange$.subscribe((event) => {
      this.text = event.target.value;
    });
  }

  render() {
    return (
      <div>
        <h2>{this.text}: {this.count}</h2>

        <input type="text" onChange={this.textChange$} placeholder="Enter Some Text" />

        <button onClick={this.click$}>Click Me</button>
      </div>
    )
  }
}
