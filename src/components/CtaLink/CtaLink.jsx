import { FaGithub, FaLinkedin, FaCloudDownloadAlt } from "react-icons/fa";
import FadeIn from "../../utils/Animations/FadeIn";

function CtaLink() {
  const links = [
    { id: 1, link: "linkedin.com", text: "linkedin", icon: FaLinkedin },
    { id: 2, link: "github.com", text: "github", icon: FaGithub },
    { id: 3, link: "github.com", text: "CV", icon: FaCloudDownloadAlt },
  ];

  return (
    <>
      <FadeIn>
        <div className="flex gap-2 md:gap-4 content-between w-full justify-center">
          {links.map((e) => {
            const Icon = e.icon;
            return (
              <div
                key={e.id}
                className="
                    text-sm md:text-xl border-1  border-blue-500 rounded-2xl 
                    px-5 py-1 text-color-base min-w-[30%] md:min-w-[150px]
                    hover:border-pink-500 hover:text-white hover:scale-110
                    transition-all duration-200"
              >
                <a
                  href={e.link}
                  target="_blank"
                  className="flex gap-2 items-center justify-center"
                >
                  <Icon size={20}></Icon>
                  {e.text}
                </a>
              </div>
            );
          })}
        </div>
      </FadeIn>
    </>
  );
}

export default CtaLink;
