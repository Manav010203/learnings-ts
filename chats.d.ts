export declare module "./chats.js" {
  export interface Chat{
  time:string;
  message:string;
  }

  export const chats: Chat[];
  export function log(chats:Chat[]):void;
}
