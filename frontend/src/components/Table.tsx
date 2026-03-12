import classNames from "classnames";
import React from "react";
interface TableComonProps {
  className?: string;
  children?: React.ReactNode;
}

function Table({ className, children }: TableComonProps) {
  return (
    <table
      className={classNames(" w-full border-collapse bg-white ", className)}
    >
      {children}
    </table>
  );
}

function TableHead({ className, children }: TableComonProps) {
  return (
    <thead
      className={classNames(" bg-gray-50 border-b border-gray-200", className)}
    >
      <tr>{children}</tr>
    </thead>
  );
}

function TableHeadCell({ className, children }: TableComonProps) {
  return (
    <td
      className={classNames(
        "px-6 py-4 text-sm font-semibold text-gray-900 uppercase tracking-wider",
        className,
      )}
    >
      {children}
    </td>
  );
}

function TableBody({ className, children }: TableComonProps) {
  return (
    <tbody className={classNames(" divide-y divide-gray-100", className)}>
      {children}
    </tbody>
  );
}
function TableRow({ className, children }: TableComonProps) {
  return (
    <tr className={classNames("hover:bg-gray-50 transition-colors", className)}>
      {children}
    </tr>
  );
}

function TableCell({ className, children }: TableComonProps) {
  return <td className={classNames("px-6 py-4", className)}>{children}</td>;
}

export { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow };
