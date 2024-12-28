import { Education } from "./Education";
import { WorkExperience } from "./Experience";

export const MainContent = () => {
  return (
    <div className="bg-white p-12 space-y-10">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-wider text-[#0082E6]">
          PROFILE
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Full Stack Developer with 5+ years of experience. Skilled in React,
          Next.js, Node.js, and Golang. Proficient in CSS, JavaScript, state
          management, and testing. Experienced in Docker, WebAssembly, and agile
          practices like Scrum and Kanban.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-wider text-[#0082E6]">
          WORK EXPERIENCE
        </h2>

        <WorkExperience
          title="Frontend | MERN Developer"
          company="HOLO XR"
          period="2023 - Present"
          location="Santiago, Chile"
          responsibilities={[
            "Created a Gantt chart with React.js.",
            "Built a scheduler integrated with Autodesk APIs.",
            "Enabled 3D model-based project progress tracking.",
            "Improved management through real-time visual tools.",
          ]}
        />

        <WorkExperience
          title="Frontend | React Developer"
          company="Seven Suite"
          period="2023 - 2023"
          location="San José, Costa Rica"
          responsibilities={[
            "Rebuilt a .NET app using Next.js frontend.",
            "Integrated .NET 6 backend with SQL Server.",
            "Deployed the application seamlessly on Azure.",
            "Enhanced performance during web technology transition.",
          ]}
        />

        <WorkExperience
          title="FullStack | .NET Developer"
          company="Norkut"
          period="2022 - 2022"
          location="Nueva Esparta, Venezuela"
          responsibilities={[
            "Improved CRM features for supermarket management software.",
            "Developed point of sale and inventory control systems.",
            "Customized and optimized nopCommerce for e-commerce.",
            "Built applications using WPF, Windows Forms, and .NET.",
          ]}
        />

        <WorkExperience
          title="Frontend | React Developer"
          company="Nanotecks"
          period="2020 - 2021"
          location="Santo Domingo de los Tsachilas, Ecuador"
          responsibilities={[
            "Promoting apartments in Santo Domingo.",
            "Attractive design for buyer interest",
            "SEO-focused for increased visibility",
            "Highlighting Ecuador market opportunity",
          ]}
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-wider text-[#0082E6]">
          EDUCATION
        </h2>

        <div className="space-y-6">
          <Education
            degree="Bachelor's Degree in Computer Science"
            school="Universidad de Oriente (UDO)"
            period="2017 - no finish"
            details="Completed coursework in programming, algorithms, databases and software engineering"
          />

          <Education
            degree="High School"
            school="U.E.N.B DR. Luis Ortega"
            period="2011 - 2016"
            details=""
          />
        </div>
      </section>
    </div>
  );
};
