function AboutMe() {
  return (
    <>
      <section
        id="about"
        className="flex flex-col gap-10 scroll-mt-36 sd:scroll-mt-32"
      >
        <h2 className="text-5xl font-extrabold">About me</h2>
        <p>
        I'm Daniel Ciciliani, a frontend developer <span className="font-bold">from Argentina, based in Spain.</span> I started
        coding back in 2019 out of curiosity, <span className="font-bold">and by 2020 I was freelancing and I've landed
        my first job.</span>
        </p>
        <p>
        Since then, I've worked across different industries like advertising and retail, and recently, I've co-founded an AI-powered startup that's still on 
        its early stages. 
        </p>
        <p>
        I've done some things in backend — PHP, MySQL, Docker, Linux — but I always choose frontend.
        Maybe it's the <span className="italic">Apple fan</span> in me, but 
        <span className="font-bold"> I believe good UI and UX
        are game-changers</span>. 
        </p>
        <p>
        These days, I’m all about <span className="font-bold"> building fast, responsive, and smooth interfaces</span> using modern tools like <span className="font-bold">React, Tailwind, Motion, and Next.js.</span>
        </p>
      </section>
    </>
  );
}

export default AboutMe;
