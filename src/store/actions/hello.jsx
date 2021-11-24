import { SAY_HELLO, SAY_SOMETHING, SAY_HELLO_START } from "../types/hello";

export const sayHelloStart = () => {
  return {
    type: SAY_HELLO_START
  };
};

export const sayHello = () => {
  return {
    type: SAY_HELLO
  };
};

export const saySomething = payload => {
  return {
    type: SAY_SOMETHING,
    payload
  };
};
