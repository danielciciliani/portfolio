function Experience() {
  const experiences = [
    {
      id: 1,
      jobTitle: "Frontend Developer",
      company: "Grupo Juinsa",
      from: "07/2022 - 07/2024",
      details: [
        <>
          Developed a real-time dashboard using React and Javascript to monitor
          deployments in Staging and Production environments, integrating the
          Bitbucket API to fetch and display status.
        </>,
        <>
          Integrated Conset Managemenet Service with Google Tag Manager services
          to track cookie consents in the project.
        </>,
        <>
          Implemented new themes in two of the group's stores, reflecting the
          company’s new visual identity.
        </>,
        <>
          Developed, maintained, and modified custom modules. And adapted
          functionalities in proprietary Magento modules.
        </>,
        <>
          Migrated custom modules to Composer, improving version management in
          Git.
        </>,
        <>
          Led the support panel, debugging and bug fixing both Frontend and
          Backend tickets.
        </>,
        <>
          Optimized or reduce SQL queries, improving the general performance and
          quality of the code.
        </>,
        <>
          Delivered demo presentations, to showcase the new features to the
          interested parts.
        </>,
      ],
    },
    {
      id: 2,
      jobTitle: "Frontend Developer",
      company: "Modern Talking",
      from: "01/2022 - 06/2022",
      details: [
        <>
          Developed custom websites from scatch for end-clients, implementing
          designs provided in Figma by the Design Team.
        </>,
        <>
          Designed wireframes based on client needs, proposing functional and
          modern alternatives to deliver to the UI team.
        </>,
      ],
    },
    {
      id: 3,
      jobTitle: "Frontend Developer",
      company: "Van Agency",
      from: "09/2021 - 12/2021",
      details: [
        <>
          Developed websites using visual builders, customizing base templates.
        </>,
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        <h2 className="text-5xl font-extrabold ">Work experience</h2>
        {experiences.map((experience) => (
          <>
            <div key={experience.id} className="flex flex-col gap-2 relative">
              <div className="h-[100%] w-[1px] border-[1px] border-pink-500 absolute top0 -left-[21px]"></div>
              <div className="h-[20px] w-[20px] border-[2px] border-gradient bg-[#1e1e1e] absolute top-1.5 md:top-2.5 -left-[30px] rounded-full"></div>

              <div className=" text-2xl md:text-4xl font-extrabold">
                {experience.jobTitle}
              </div>
              <div className="flex flex-col md:flex-row justify-between items-baseline text-2xl md:text-3xl font-light">
                <div className="">{experience.company}</div>
                <div className="text-xl">{experience.from}</div>
              </div>
              <div>
                <div className="text-normal pl-4">
                  {experience.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Experience;
