import FadeInFromBottom from "../../utils/Animations/FadeInFromBottom";
import { ExperienceData } from "../../utils/ExperienceData";

function Experience() {
  const experiences = ExperienceData;

  return (
    <>
      <section id="experience" className="flex flex-col gap-10 scroll-mt-32">
        <h2 className="text-5xl font-extrabold ">Work experience</h2>
        <div className="h-full flex-col relative">
          <div className="h-[100%] w-[1px] border-[1px] border-pink-500 absolute  first:top-0 -left-[21px] -top-[30px] "></div>
          {experiences.map((experience, i) => (
            <FadeInFromBottom
              key={i}
              className="flex flex-col gap-2 relative pb-10 last:pb-0 pl-1"
            >
              <FadeInFromBottom
                once={false}
                className="h-[20px] w-[20px] border-[2px] border-gradient bg-[#1e1e1e] absolute top-1.5 md:top-2.5 -left-[30px] rounded-full"
              ></FadeInFromBottom>

              <div className=" text-2xl md:text-4xl font-extrabold">
                {experience.jobTitle}
              </div>
              <div className="flex flex-col md:flex-row justify-between items-baseline text-2xl md:text-3xl font-light">
                <div className="flex flex-col items-baseline gap">
                  <div className="">{experience.company}</div>
                  <div className="italic text-lg sm:text-xl">
                    {experience.sector}
                  </div>
                </div>
                <div className="text-xl">{experience.from}</div>
              </div>
              <div>
                <div className="text-normal pl-4">
                  {experience.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </div>
              </div>
            </FadeInFromBottom>
          ))}
        </div>
      </section>
    </>
  );
}

export default Experience;
