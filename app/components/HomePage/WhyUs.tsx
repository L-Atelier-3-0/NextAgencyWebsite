import Image from "next/image";
import { cards } from "@/app/constant_data/why-us";

export default async function WhyUs() {
  return (
    <section className="px-4 flex flex-col items-center py-16 bg-primary">
      <h2 className="text-6xl lg:text-9xl font-black text-textLight">
        Pourquoi nous ?
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full max-w-7xl pt-16 pb-2">
        {cards?.map((card: WhyUsCard, i: number) => (
          <div className="border-[1px] border-bgDark rounded-md overflow-hidden bg-bgLight">
            <div className="relative">
              <Image
                className="h-36 object-cover w-full"
                src={`/abstract/${card.image}`}
                width={400}
                height={200}
                alt={card.title}
              />
            </div>
            <div className="p-2">
              <h3 className="w-4/5 text-textDark text-4xl font-bold overflow-hidden overflow-ellipsis">
                {card.title}
              </h3>
              <p className="mt-2">{card.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
