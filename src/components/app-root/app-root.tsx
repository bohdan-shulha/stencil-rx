import { Component } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <p>This is a proof-of-concept targeted to integrate Stencil with Rx by using supersimple interface.</p>

          <rx-demo />
        </main>
      </div>
    );
  }
}
