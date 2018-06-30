// export default function FromEvent(...events: string[]) {
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     const didLoad = target.componentDidLoad;
//
//     target.componentDidLoad = function() {
//       didLoad && didLoad.call(this);
//
//       // TODO: investigate on how to get the targeting Node at this point,
//       // so we could do Observer.fromEvent(target, events)
//       const stream$ = {
//         subscribe: () => console.log('decorator stream$ subscribe')
//       };
//
//       descriptor.value(stream$);
//     }
//   }
// }
