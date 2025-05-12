import { motion } from "motion/react";
import FadeInFromBottom from "../../utils/Animations/FadeInFromBottom";
import { ProjectsData } from "../../utils/ProjectsData";

function Projects() {
  const projects = ProjectsData;

  return (
    <section
      id="projects"
      className="flex flex-col gap-10 scroll-mt-36 sd:scroll-mt-32"
    >
      <h2 className="text-5xl font-extrabold">Projects</h2>
      {projects.map((project) => (
        <FadeInFromBottom
          key={project.id}
          className="w-full h-auto flex flex-col lg:flex-row  gap-5 pb-10 last:pb-0"
        >
          <div className="w-full lg:w-[70%] rounded-xl border-[.5] border-gradient overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.2 }}
              className="rounded-xl"
              src={project.image}
              alt={project.name}
            />
          </div>
          <div className="">
            <h3 className="text-2xl md:text-4xl font-extrabold pt-1">
              {project.name}
            </h3>
            <div className="flex gap-1.5 pt-2 pb-5">
              {project.tech.map((techItem, index) => (
                <div
                  className="cursor-pointer text-sm border-1  border-slate-500 rounded-2xl px-5 min-w-4 py-1 text-center bg-slate-500"
                  key={index}
                >
                  {techItem}
                </div>
              ))}
            </div>
            <div className="detail">{project.details}</div>
            <div>
              <div className="code">{project.buttons.code}</div>
              <div className="preview">{project.buttons.preview}</div>
            </div>
          </div>
        </FadeInFromBottom>
      ))}
    </section>
  );
}

export default Projects;
