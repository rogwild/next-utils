import useBreakpoint from "./use-breakpoint";
import useAuth from "./use-auth";

const hooks = {
  useBreakpoint,
  ...useAuth,
};

export default hooks;
