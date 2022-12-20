import useLookupTable from "./use-lookup-table";
import useSetParentsInput from "./use-set-parents-input";
import useBreakpoint from "./use-breakpoint";
import useStyleRewriter from "./use-style-rewriter";
import useDetectMouseover from "./use-detect-mouseover";
import useDetectOutsideClick from "./use-detect-outsideclick";
import useForm from "./use-form";
import useChildForm from "./use-form/use-child-form";
import useDomMeasure from "./use-dom-measure";
import useDebounce from "./use-debounce";
import useAuth from "./use-auth";
import useWeb3Auth from "./use-web3-auth";

const hooks = {
  useDetectMouseover,
  useDetectOutsideClick,
  useLookupTable,
  useBreakpoint,
  useSetParentsInput,
  useStyleRewriter,
  useForm,
  useChildForm,
  useDomMeasure,
  useDebounce,
  useWeb3Auth,
  ...useAuth,
};

export default hooks;
