import { FC } from "react";
declare type TOnNavBtnClickProps = {
    isNext: boolean;
    isShiftToEdge: boolean;
};
export declare type TPaginationProps = {
    currentPage: number;
    pagesCount: number;
    visiblePagesCount?: number;
    onNavBtnClick: (props: TOnNavBtnClickProps) => void;
    onPageBtnClick: (pageNumber: number) => void;
};
declare const Pagination: FC<TPaginationProps>;
export default Pagination;
