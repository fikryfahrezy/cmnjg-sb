import type { Column } from "react-table";
import React, { useRef, useEffect } from "react";
import { useTable } from "react-table";
import styles from "./index.module.css";

export type TableProps = {
  data: {}[];
  columns: ({ isSticky?: boolean } & Column<{}>)[];
  colMw?: number;
} & React.DetailedHTMLProps<
  React.TableHTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>;

const Table = ({
  data,
  colMw,
  className,
  columns: layoutColumns,
  ...properties
}: TableProps) => {
  const theadRef = useRef<HTMLTableSectionElement>(null);
  const tbodyRef = useRef<HTMLTableSectionElement>(null);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ data, columns: layoutColumns });

  const wrapperOnScrollHandler = ({
    currentTarget,
  }: React.UIEvent<HTMLDivElement, UIEvent>) => {
    /**
     * Ref:
     * https://stackoverflow.com/a/9439807/12976234
     * https://stackoverflow.com/a/50655240/12976234
     * https://stackoverflow.com/a/9541579/12976234
     */

    const rightHandler = () => {
      const scrollShadowSelectorLeft = styles.activeScrollShadowLeft;
      const isContainsLeft = currentTarget.classList.contains(
        scrollShadowSelectorLeft,
      );

      if (
        currentTarget.offsetWidth + currentTarget.scrollLeft >=
          currentTarget.scrollWidth &&
        isContainsLeft
      ) {
        currentTarget.classList.remove(scrollShadowSelectorLeft);
        return;
      }

      if (!isContainsLeft) {
        currentTarget.classList.add(scrollShadowSelectorLeft);
      }
    };

    const leftHandler = () => {
      const scrollShadowSelectorRight = styles.activeScrollShadowRight;
      const isContainsRight = currentTarget.classList.contains(
        scrollShadowSelectorRight,
      );

      if (currentTarget.scrollLeft === 0 && isContainsRight) {
        currentTarget.classList.remove(scrollShadowSelectorRight);
        return;
      }

      if (!isContainsRight) {
        currentTarget.classList.add(scrollShadowSelectorRight);
      }
    };

    leftHandler();
    rightHandler();
  };

  useEffect(() => {
    /**
     * - Get the first row
     * - Split the row equally
     * - Loop the first split and the second from begining till the end
     * --- Calculate the previous columns width
     * --- Save the the each calculations to each index of an array
     * 		with flag represent it's come from first split or last split
     * --- if the column should to be sticky add the index of column to another array
     *
     * - Get the rest of the rows
     * -- Apply all array that contain sticky column information to the each table column
     */
    const calculateSticky = (rows: HTMLCollection) => {
      const rowsLen = rows.length;
      if (rowsLen <= 0) {
        return;
      }

      const firstRows = rows[0].children;
      const firstRowsLen = firstRows.length;
      if (firstRowsLen <= 0) {
        return;
      }

      const halfLength = Math.floor(firstRowsLen / 2);
      const prevWidthCalcs: {
        isLeft: boolean;
        isShadow: boolean;
        minWidth: number;
        maxWidth: number;
        widthTotal: number;
        widthStickyTotal: number;
      }[] = [];
      const stickyFlags: number[] = [];

      let widthTotal = 0;
      let widthStickyTotal = 0;
      let firstHalfSticky = false;
      for (let i = 0; i < halfLength; i++) {
        const { isSticky, minWidth, maxWidth } = layoutColumns[i];
        firstHalfSticky = isSticky === true;
        if (
          i < firstRowsLen &&
          i < halfLength - 1 &&
          layoutColumns[i + 1].isSticky === true
        ) {
          firstHalfSticky = false;
        }

        const isShouldCalc = i !== 0;
        if (isShouldCalc) {
          const lastColW = firstRows[i - 1].getBoundingClientRect().width;
          widthTotal += lastColW;
        }

        let currColW = 0;
        if (isSticky) {
          currColW = firstRows[i].getBoundingClientRect().width;
          widthStickyTotal += currColW;

          stickyFlags.push(i);
        }

        prevWidthCalcs.push({
          widthTotal,
          isLeft: true,
          widthStickyTotal: isShouldCalc ? widthStickyTotal - currColW : 0,
          minWidth: minWidth ?? 0,
          maxWidth: maxWidth ?? 0,
          isShadow: isSticky === true && firstHalfSticky,
        });
      }

      const currPWCLen = prevWidthCalcs.length;
      const currSFLen = stickyFlags.length;

      widthTotal = 0;
      widthStickyTotal = 0;
      firstHalfSticky = false;
      for (let i = firstRowsLen - 1; i >= halfLength; i--) {
        const { isSticky, minWidth, maxWidth } = layoutColumns[i];
        firstHalfSticky = isSticky === true;
        if (i > 0 && i > halfLength && layoutColumns[i - 1].isSticky === true) {
          firstHalfSticky = false;
        }

        const isShouldCalc = i !== firstRowsLen - 1;
        if (isShouldCalc) {
          const column = firstRows[i - 1].getBoundingClientRect();
          widthTotal += column.width;
        }

        let currColW = 0;
        if (isSticky) {
          currColW = firstRows[i].getBoundingClientRect().width;
          widthStickyTotal += currColW;

          stickyFlags.splice(currSFLen, 0, i);
        }

        prevWidthCalcs.splice(currPWCLen, 0, {
          widthTotal,
          widthStickyTotal: isShouldCalc ? widthStickyTotal - currColW : 0,
          isLeft: false,
          minWidth: minWidth ?? 0,
          maxWidth: maxWidth ?? 0,
          isShadow: isSticky === true && firstHalfSticky,
        });
      }

      const stickyFlagsLen = stickyFlags.length;
      for (let i = 0; i < rowsLen; i++) {
        const columns = rows[i].children;
        for (let j = 0; j < stickyFlagsLen; j++) {
          const colIdx = stickyFlags[j];
          const { isLeft, isShadow, maxWidth, minWidth, widthStickyTotal } =
            prevWidthCalcs[colIdx];
          const col = columns[colIdx] as HTMLElement;
          const colWidth = columns[colIdx].clientWidth;

          col.style.width = `${colWidth}px`;
          col.style.minWidth = `${minWidth > 0 ? minWidth : colWidth}px`;
          col.style.position = "sticky";
          const isHead = col.tagName === "TH";
          col.style.zIndex = isHead ? "99" : "2";

          if (maxWidth > 0) {
            col.style.maxWidth = `${maxWidth}px`;
          }

          if (isLeft) {
            col.style.left = `${widthStickyTotal}px`;
            if (isShadow) {
              col.classList.add(styles.shadowRight);
            }
          } else {
            col.style.right = `${widthStickyTotal}px`;
            col.style.zIndex = isHead
              ? `${99 + (stickyFlagsLen - j)}`
              : `${stickyFlagsLen - j + 1}`;
            if (isShadow) {
              col.classList.add(styles.shadowLeft);
            }
          }
        }
      }
    };

    const tbody = tbodyRef.current;
    if (tbody) {
      calculateSticky(tbody.children);
    }

    const thead = theadRef.current;
    if (thead) {
      calculateSticky(thead.children);
    }
  }, [layoutColumns]);

  return (
    <div className={styles.tableWrapper} onScroll={wrapperOnScrollHandler}>
      <table
        {...getTableProps()}
        {...properties}
        className={`${styles.table} ${className}`}
      >
        <thead ref={theadRef}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(
                ({ id, maxWidth, minWidth, render }, _) => {
                  return (
                    <th
                      key={id}
                      style={{
                        maxWidth: maxWidth
                          ? maxWidth < 9e15
                            ? maxWidth
                            : "none"
                          : "none",
                        minWidth: minWidth
                          ? minWidth > 0
                            ? minWidth
                            : "auto"
                          : "auto",
                      }}
                    >
                      {render("Header")}
                    </th>
                  );
                },
              )}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} ref={tbodyRef}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(({ column, getCellProps, render }, _) => {
                  const { maxWidth, minWidth } = column;
                  return (
                    <td
                      {...getCellProps()}
                      style={{
                        maxWidth: maxWidth
                          ? maxWidth < 9e15
                            ? maxWidth
                            : "none"
                          : "none",
                        minWidth: minWidth
                          ? minWidth > 0
                            ? minWidth
                            : "auto"
                          : "auto",
                      }}
                    >
                      {render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
