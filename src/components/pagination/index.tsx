import React, { FC, useEffect, useState } from "react";

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

const Pagination: FC<TPaginationProps> = ({
  currentPage,
  pagesCount,
  visiblePagesCount = 3,
  onNavBtnClick,
  onPageBtnClick,
}) => {
  const [pagesBtns, setPagesBtns] = useState<number[]>([]);

  useEffect(() => {
    if (pagesBtns.includes(currentPage)) return;

    let page = currentPage;
    if (page + visiblePagesCount > pagesCount)
      page = pagesCount - visiblePagesCount + 1;

    const cb = (_: null, index: number) => page + index;
    const newBtns = new Array(visiblePagesCount).fill(0).map(cb);
    setPagesBtns(newBtns);
  }, [pagesCount, visiblePagesCount, currentPage]);

  const showNavBtns = pagesCount > visiblePagesCount;
  const isLeftEdge = pagesBtns[0] + visiblePagesCount <= pagesCount;
  return (
    <div className="flex justify-start items-center gap-2">
      {showNavBtns ? (
        <>
          <div
            onClick={() =>
              onNavBtnClick({ isNext: false, isShiftToEdge: true })
            }
            className={btn}
          >
            {`<<`}
          </div>
          <div
            onClick={() =>
              onNavBtnClick({ isNext: false, isShiftToEdge: false })
            }
            className={btn}
          >
            {`<`}
          </div>
        </>
      ) : null}
      <div className="flex justify-center items-center gap-2">
        {showNavBtns && !isLeftEdge ? <div className={btn}>...</div> : null}
        {pagesBtns.map((page) => (
          <div
            className={`flex cursor-pointer select-none leading-5 justify-center items-center rounded-xl min-w-[44px] min-h-[44px] p-3 ${
              page === currentPage
                ? `bg-black border`
                : `bg-neutral-850 hover:border text-neutral-500`
            } border-white`}
            key={page}
            onClick={() => page !== currentPage && onPageBtnClick(page)}
          >
            {page}
          </div>
        ))}
        {showNavBtns && isLeftEdge ? (
          <div
            className={`flex cursor-pointer leading-5 justify-center items-center rounded-xl min-w-[44px] min-h-[44px] p-3 bg-neutral-850 text-neutral-500`}
          >
            ...
          </div>
        ) : null}
      </div>
      {showNavBtns ? (
        <>
          <div
            onClick={() =>
              onNavBtnClick({ isNext: true, isShiftToEdge: false })
            }
            className={btn}
          >
            {`<`}
          </div>
          <div
            onClick={() => onNavBtnClick({ isNext: true, isShiftToEdge: true })}
            className={btn}
          >
            {`<<`}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Pagination;

const btn = `flex cursor-pointer select-none leading-5 justify-center items-center rounded-xl min-w-[44px] min-h-[44px] p-3 bg-neutral-850 text-neutral-500`;

// const isFirst = currentPage === pagesBtns[0];
// const isLast = currentPage === pagesBtns[pagesBtns.length - 1];
// else if (isLast) page--;
