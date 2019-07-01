import "./styles.css";
import { fromEvent } from "rxjs";

const button = document.querySelector("button");

const subscription = fromEvent(button, "click").subscribe(() => {
  console.info(new Date());
});

setTimeout(() => {
  console.warn("Unsubscribing");
  subscription.unsubscribe();
}, 3000);
