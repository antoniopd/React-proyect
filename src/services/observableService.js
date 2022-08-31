import { Observable } from "rxjs";

export const getNumbers = new Observable(subscriber => {
    // we emit values:
    subscriber.next(1);//emits 1
    subscriber.next(2);//emits 2
    subscriber.next(3);//emits 3
    setTimeout(() => {
      subscriber.next(4);//emits 4
      subscriber.next(5);
      subscriber.next(6);
      subscriber.next(7);
      subscriber.complete();//Finally, the Observable complete & finishes
    }, 3000);//waits 1s
})