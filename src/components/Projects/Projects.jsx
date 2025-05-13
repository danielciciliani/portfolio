import { motion } from "motion/react";
import FadeInFromBottom from "../../utils/Animations/FadeInFromBottom";
import { ProjectsData } from "../../utils/ProjectsData";
import { div } from "motion/react-client";

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
          <div className="w-full lg:min-w-[60%] lg:max-w-[60%] rounded-xl border-[.5] border-gradient overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.2 }}
              transition={{
                stiffness: 300,
                damping: 15,
              }}
              className="rounded-xl w-full h-full contain-content"
              src={project.image}
              alt={project.name}
            />
          </div>
          <div className="">
            <h3 className="text-2xl md:text-4xl font-extrabold pt-1">
              {project.name}
            </h3>
            <div className="flex flex-wrap gap-1.5 pt-2 pb-5 text-white">
              {project.tech?.map((item, index) => (
                <div
                  className="flex items-center gap-1 text-sm border-1 border-blue-500/90 dark:border-slate-700 rounded-2xl px-3 min-w-4 py-1 text-center bg-blue-900/60 dark:bg-blue-500/10"
                  key={index}
                >
                  {item.icon}
                  {item.name}
                </div>
              ))}
            </div>
            <div className="detail">{project.details}</div>
            <div className="flex pt-5 gap-3">
              {project.buttons.map((button, index) => (
                <motion.div key={index} 
                className="
                border-1 py-1 px-5 rounded-2xl text-sm sm:text-md 2xl:text-xl border-blue-500
                text-color-base md:min-w-[100px] hover:border-pink-500
                cursor-pointer
                
                "
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
                >
                  <a href={button.link} target="_blank" className="flex items-center justify-center gap-2">{button.icon}{button.name}</a>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInFromBottom>
      ))}
    </section>
  );
}

export default Projects;
