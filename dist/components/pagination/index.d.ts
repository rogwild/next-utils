import { FC } from "react";
type TOnNavBtnClickProps = {
    isNext: boolean;
    isShiftToEdge: boolean;
};
export type TPaginationProps = {
    currentPage: number;
    pagesCount: number;
    visiblePagesCount?: number;
    onNavBtnClick: (props: TOnNavBtnClickProps) => void;
    onPageBtnClick: (pageNumber: number) => void;
};
declare const Pagination: FC<TPaginationProps>;
export default Pagination;
