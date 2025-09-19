// import { chats } from "./chats.js";
// import { log } from "./chats.js";

import {log,chats} from "./chats.js";
const button = document.getElementById("enable-button")!;

button.addEventListener("click", () => {
  // @ts-ignore
  window.supportAI.enableAutoReply();
});
log(chats);
