"use client";

import { FAQ } from "@/schemas/faq";
import React from "react";
import { TbMinus, TbPlus } from "react-icons/tb";

export default function FAQs({ faqs }: { faqs: FAQ[] }) {
  const [current, setCurrent] = React.useState<number | null>(null);
  if (!faqs) return null;

  return (
    <div className="flex flex-col w-full gap-3 blog-article px-4 max-w-5xl m-auto py-16">
      {(faqs ?? []).map((faq, index) => (
        <div key={index} className="p-4 rounded border-[1px]">
          <button
            onClick={() =>
              setCurrent((prev) => (prev === index ? null : index))
            }
            className="w-full flex items-center justify-between"
          >
            <h2 className="text-left  text-3xl font-bold my-2">
              {faq.question}
            </h2>
            {current === index ? (
              <TbMinus className="text-3xl" />
            ) : (
              <TbPlus className="text-3xl" />
            )}
          </button>
          <p className={`mt-2 ${current === index ? "" : "hidden"}`}>
            {faq.answer}
          </p>
        </div>
      ))}
    </div>
  );
}
