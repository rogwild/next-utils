declare const BREAKPOINTS: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    "2xl": number;
};
declare const useBreakpoint: (breakpoint: keyof typeof BREAKPOINTS) => boolean;
export default useBreakpoint;
