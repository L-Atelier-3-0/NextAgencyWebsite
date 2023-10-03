import Image from "next/image";
import { members } from "@/app/constant_data/members";

const AboutUs = () => {
  return (
    <section id="team" className="flex flex-col justify-center items-center px-4 pt-20 pb-10">
      <h2 className="text-6xl lg:text-9xl font-black text-textDark mb-12">
        Notre équipe
      </h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {members.map((member: TeamMember, i: number) => (
            <div className="bg-city h-full p-4 max-w-screen-2xl border-[1px] border-bgDark/50 shadow-lg shadow-bgDark/20 bg-bgLight">
            <h3 className="font-black max-w-xs text-4xl">
                {member.role}
            </h3>
            <div className="gap-4 flex flex-col">
                <div key={i} className="max-w-[500px]">
                <h4 className="font-bold mt-4 mb-1">{member.name}</h4>
                <p className="text-justify">{member.content}</p>
                <Image
                    className="w-full mt-4 max-w-[500px]"
                    width={300}
                    height={300}
                    alt={member.name}
                    src={`/team/${member.image}`}
                />
                </div>
            </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
