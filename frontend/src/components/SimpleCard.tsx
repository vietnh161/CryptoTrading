import classNames from "classnames";
import React from "react";
interface SimpleCardProps {
  label: string;
  className?: string;
  children?: React.ReactNode;
}

function SimpleCard({ label, className, children }: SimpleCardProps) {
  return (
    <div
      className={classNames(
        " bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-shadow ",
        className,
      )}
    >
      <p className="text-xs font-bold text-gray-600 mb-2">{label}</p>
      {children}
    </div>
  );
}

export default SimpleCard;
