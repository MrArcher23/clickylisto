"use client";

import { ReactNode } from "react";

interface Props {
  titleText: string;
  subTitleOne?: string;
  subTitleBold: string;
  subTitleTwo: string;
  children?: ReactNode;
}

export const HeaderPage: React.FC<Props> = ({
  titleText,
  subTitleOne,
  subTitleTwo,
  subTitleBold,
  children
}) => {
  return (
    <main className="container mt-10 flex flex-col items-center gap-3 text-center">
      <div className="">
        <h1 className="mb-1 font-mono text-2xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          {titleText}
        </h1>
        <p className="text-muted-foreground max-w-2xl text-sm">
          {subTitleOne} <span className="font-bold">{subTitleBold}</span> <span>{subTitleTwo}</span>
        </p>
      </div>
      <section className="w-full md:w-3/5 lg:w-3/5 xl:w-3/5">{children}</section>
    </main>
  );
};
