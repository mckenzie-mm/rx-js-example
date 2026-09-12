
function print(val) {
   console.log(val);
   let el = document.getElementById('txt')
   el.innerText = val;
}

// Example 1
// const observable = Rx.Observable.create(
//     observer => {
//         observer.next( 'hello ');
//         observer.next( 'world ');
//     }
// );
// observable.subscribe(val => print(val));

// Example 2
// const clicks = Rx.Observable.fromEvent(document, 'click')

// clicks.subscribe(val => print(val));

// Example 3
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved!')
    }, 1000)
});
const obsvPromise = Rx.Observable.fromPromise(promise);
obsvPromise.subscribe(result => print(result))

// Example 4
// const timer = Rx.Observable.timer(1000);

// timer.subscribe(done => print('ding'))

// Example 5
// const timer = Rx.Observable.interval(1000);
// timer.subscribe(done => print(new Date().getSeconds()))