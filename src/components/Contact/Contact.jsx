import { mailTo } from "../../utils/data/LinksData";

function Contact({ children }) {
  return (
    <>
      <section id="contact" className="w-full">
        <div className="flex flex-col cursor-pointer">
          <h2 className="text-5xl font-extrabold">Let's talk!</h2>
          <p className="pt-10 pb-5 text-lg">
            If you think we can build something together,
            <span className="font-bold">
              <a href={mailTo}> let's get in touch!</a>
            </span>
          </p>
          <div className="pt-5 flex self-end">{children}</div>
        </div>
      </section>
    </>
  );
}

export default Contact;
