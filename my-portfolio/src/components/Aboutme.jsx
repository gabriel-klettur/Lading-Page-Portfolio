const Aboutme = () => {
  return (
    <div className="bg-background text-textPrimary font-sans">
      <section className="px-0 sm:px-2 md:px-4 py-4 max-w-3xl mx-auto">

        <h1 className="text-3xl sm:text-5xl font-extrabold text-primary leading-tight pb-2">
          About Me
        </h1>

        <p className="mt-6 text-base sm:text-lg leading-relaxed text-textSecondary">
          I am Gabriel, a software developer with a passion for technology, process optimization, and solving complex problems.
          My professional journey has been marked by challenging and diverse experiences that have strengthened both my technical
          and personal skills. Since arriving in Iceland, I have embraced every opportunity as a challenge to prove my ability to
          adapt, learn, and excel in various environments.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-primary mt-10">My First Steps in Iceland</h2>
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-textSecondary">
          I began my journey in Sandgerði, working on machinery cleaning at Nyfiskur. This environment allowed me to apply my
          analytical mindset and focus on continuous improvement. I designed diagrams, calculated timings, and optimized every
          step of the cleaning and maintenance process, which eventually led to my promotion as manager of a four-person team.
          There, I developed plans to standardize processes and ensure operational efficiency.
        </p>
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-textSecondary">
          When COVID-19 forced me to stay in Sandgerði, I discovered the power of patience and ventured into the world of
          investments and trading. Although I faced a challenging start, with negative results during my first two years, I learned
          to survive the markets and develop resilience.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-primary mt-10">Balancing Technical and Personal Projects</h2>
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-textSecondary">
          At the same time, I worked on family projects developing interfaces for environmental analysis companies using Laravel.
          This experience solidified my ability to create tailored solutions while maintaining my passion for software engineering.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-primary mt-10">Transition to Reykjavik: New Challenges and Learnings</h2>
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-textSecondary">
          Over time, I moved to Reykjavik to explore new opportunities, this time in the culinary field. I started from scratch as
          a dishwasher at CenterHotels, where I learned and quickly grew, advancing to roles such as pastry chef, chef assistant,
          and eventually leading teams as the main chef on various occasions. Again, my inclination for continuous improvement led
          me to document and optimize production processes, facilitating the onboarding of new team members.
        </p>
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-textSecondary">
          Despite being immersed in gastronomy, I never set aside my passion for software. I dedicated time to updating my
          knowledge, learning Python while working as a manager at Babalu Caffe. This balance between continuous learning and
          management allowed me to strengthen both my technical and leadership skills.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-primary mt-10">Rediscovering My Vocation</h2>
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-textSecondary">
          In October of 2024, I made a crucial decision: to fully dedicate myself to software development and embark on a journey as an
          independent developer. Since then, I have been designing and developing two applications that reflect my learnings and
          experiences in Iceland:
        </p>

        <ul className="list-disc pl-5 mt-4 text-sm sm:text-base text-textSecondary space-y-2">
          <li>
            <strong className="text-primary">Pelusa Trader</strong>: An application under development focused on automated trading, designed to optimize
            capital management and investment strategies. This project integrates real-time market analysis and customizable
            tools, showcasing my ability to create technological solutions in the financial field.
          </li>
          <li>
            <strong className="text-primary">Open Gastro</strong>: Currently under construction, this solution aims to improve operational management in
            the restaurant sector, leveraging my practical knowledge in cooking and administration to provide tools that
            streamline daily processes for restaurants.
          </li>
        </ul>

        <p className="mt-6 text-sm sm:text-base leading-relaxed text-textSecondary">
          Both projects not only represent my evolution as a professional but also my commitment to technical excellence. As I
          develop these applications, I continue to expand my skills in modern technologies and apply the insights gained
          throughout my journey.
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-primary mt-10">My Philosophy</h2>
        <p className="mt-4 text-sm sm:text-base leading-relaxed text-textSecondary">
          Every experience in my career has been an opportunity to grow, learn, and add value. My ability to adapt to new
          environments, face challenges, and find creative solutions makes me a versatile software developer, ready to tackle
          complex projects with determination and professionalism.
        </p>
      </section>
    </div>
  );
};

export default Aboutme;
