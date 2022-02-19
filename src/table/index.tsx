import type { Column } from "react-table";
import React, { useRef, useEffect } from "react";
import { useTable } from "react-table";
import styles from "./index.module.css";

export type ExampleTableProps = {
  data: {}[];
  columns: ({ isSticky?: boolean } & Column<{}>)[];
  colMw?: number;
} & React.DetailedHTMLProps<
  React.TableHTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>;

export default function ExampleTable({
  data,
  colMw,
  className,
  columns: layoutColumns,
  ...properties
}: ExampleTableProps) {
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
     * 		with flag if it's come from first split or last split
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
        widthTotal: number;
      }[] = [];
      const stickyFlags: number[] = [];

      let widthTotal = 0;
      let firstHalfSticky = false;
      for (let i = 0; i < halfLength; i++) {
        if (i !== 0) {
          const column = firstRows[i - 1].getBoundingClientRect();
          widthTotal += column.width;
        }

        const isSticky = layoutColumns[i].isSticky;
        firstHalfSticky = isSticky === true;
        if (
          i < firstRowsLen &&
          i < halfLength - 1 &&
          layoutColumns[i + 1].isSticky === true
        ) {
          firstHalfSticky = false;
        }

        prevWidthCalcs.push({
          widthTotal,
          isLeft: true,
          isShadow: isSticky === true && firstHalfSticky,
        });

        if (isSticky) {
          stickyFlags.push(i);
        }
      }

      const currPWCLen = prevWidthCalcs.length;
      const currSFLen = stickyFlags.length;

      widthTotal = 0;
      let halfResSticky = false;
      for (let i = firstRowsLen - 1; i >= halfLength; i--) {
        if (i !== firstRowsLen - 1) {
          const column = firstRows[i - 1].getBoundingClientRect();
          widthTotal += column.width;
        }

        const isSticky = layoutColumns[i].isSticky;
        halfResSticky = isSticky === true;
        if (i > 0 && i > halfLength && layoutColumns[i - 1].isSticky === true) {
          halfResSticky = false;
        }

        prevWidthCalcs.splice(currPWCLen, 0, {
          widthTotal,
          isLeft: false,
          isShadow: isSticky === true && halfResSticky,
        });

        if (isSticky) {
          stickyFlags.splice(currSFLen, 0, i);
        }
      }

      const stickyFlagsLen = stickyFlags.length;
      for (let i = 0; i < rowsLen; i++) {
        const columns = rows[i].children;
        for (let j = 0; j < stickyFlagsLen; j++) {
          const colIdx = stickyFlags[j];
          const { isLeft, widthTotal, isShadow } = prevWidthCalcs[colIdx];
          const col = columns[colIdx] as HTMLElement;
          const colWidth = columns[colIdx].clientWidth;

          if (isLeft) {
            col.style.left = `${widthTotal}px`;
            if (isShadow) {
              col.classList.add(styles.shadowRight);
            }
          } else {
            col.style.right = `${widthTotal}px`;
            if (isShadow) {
              col.classList.add(styles.shadowLeft);
            }
          }

          col.style.width = `${colWidth}px`;
          col.style.minWidth = `${colWidth}px`;
          col.style.position = "sticky";
          col.style.zIndex = "2";
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
              {headerGroup.headers.map((column, i) => {
                return <th key={column.id}>{column.render("Header")}</th>;
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} ref={tbodyRef}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, i) => {
                  return (
                    <td {...cell.getCellProps()} style={{}}>
                      {cell.render("Cell")}
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
}
