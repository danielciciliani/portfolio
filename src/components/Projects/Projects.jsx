import { ProjectsData } from "../../utils/ProjectsData";

function Projects() {

    const projects = ProjectsData;

    return (
        <>
        <div className="flex flex-col gap-10">
            <h2>Projects</h2> 
            {
                projects.map((project) => (
                    <div key={project.id} className="w-full h-auto flex flex-col md:flex-row  gap-5">
                        <div className="w-full md:w-[60%]">
                            <img className="rounded-xl" 
                                src={project.image} 
                                alt={project.name} 
                            />
                        </div>
                        <div>
                            <div className="title">{project.name}</div>
                            <div className="tech">{project.tech}</div>
                            <div className="detail">{project.details}</div>
                            <div>
                                <div className="code">{project.buttons.code}</div>
                                <div className="preview">{project.buttons.preview}</div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        </>
    );
}

export default Projects;