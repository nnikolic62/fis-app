"use client";
// za sirinu dece moze sledeci nacini: 
// itemClassNames={["flex-1", "w-16"]}, 
// itemClassNames={["basis-3/4", "basis-1/4"]}, 
// itemClassNames={["basis-[80%]", "basis-[20%]"]}]

import React from "react";

type CompositeFieldProps = {
  children: React.ReactNode;
  className?: string;
  itemClassNames?: string[];
};

export const CompositeField = ({
  children,
  className = "",
  itemClassNames = [],
}: CompositeFieldProps) => {
  const childArray = React.Children.toArray(children);

  if (!itemClassNames.length) {
    return <div className={`flex items-end gap-3 ${className}`}>{children}</div>;
  }

  return (
    <div className={`flex items-end gap-3 ${className}`}>
      {childArray.map((child, index) => (
        <div key={index} className={itemClassNames[index] || ""}>
          {child}
        </div>
      ))}
    </div>
  );
};
