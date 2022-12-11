import React from "react";

export const createStorybookTemplate = <P>(Template: React.FC<P>) => {
  const createVariant = (args: P) => {
    const Variant = Template.bind({}) as typeof Template & { args: P };
    Variant.args = args;

    return Variant;
  };

  return { createVariant };
}