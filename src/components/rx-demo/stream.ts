import { Subject } from "rxjs";

// Latest chrome on my PC:
// new Subject 500000: 44.572021484375ms
// Stream 500000: 779.496826171875ms

if (false) {
  console.time('new Subject 500000');

  for (let i = 0; i < 500000; i++) {
    new Subject();
  }

  console.timeEnd('new Subject 500000');

  console.time('Stream 500000');

  for (let i = 0; i < 500000; i++) {
    Stream()();
  }

  console.timeEnd('Stream 500000');
}

export default function Stream() {
  return function() {
    const subject = new Subject();

    const func = function(evt) {
      subject.next(evt)
    };

    const callableSubject = Object.assign(func, subject);

    callableSubject.__proto__ = Object.getPrototypeOf(subject);

    return {
      value: callableSubject,
    }
  }
}
