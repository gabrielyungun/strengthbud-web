import { createBrowserHistory } from "history";

const history = createBrowserHistory();
const pushMethod = history.push;
history.push = (...args) => {
  const pathname = args[0];
  if (pathname !== currentPathname()) {
    pushMethod(...args);
  } else if (process.env.NODE_ENV === "development") {
    console.log("You're trying to push the same path!");
  }
};

export const currentPathname = () => {
  return history.location.pathname;
};

export default history;
