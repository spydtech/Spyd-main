import React from "react";

const technicalSkills = [
  {
    title: "DEVELOPMENT SKILLS",
    icon: "⚙️", // Replace this with an actual icon/image if needed
    details: [
      "PHP 7 & HTML 5 programming skills",
      "Advance working knowledge of AJAX",
      "Adept at JS, JQuery, Bootstrap & MySQL",
    ],
  },
  {
    title: "LIBRARIES",
    icon: "📚", // Replace this with an actual icon/image if needed
    details: ["Not ORM", "Swift Mailer", "Ratchet"],
  },
  {
    title: "TOOLS",
    icon: "🛠️", // Replace this with an actual icon/image if needed
    details: [
      "PHP Designer 8, Netbeans",
      "Nu Sphere, Eclipse",
      "PHP Debugbar, Komodo",
    ],
  },
];

const PhpTechnicalSkills = () => {
  return (
    <section className=" text-white py-10 px-1 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl text-[#00ceff]">
          Technical Skills Of Our Dedicated PHP Developers
        </h2>
        <p className="text-black text-lg mt-4">
          Our offshore PHP programmers are adept with all the modern development
          tools and well-versed with the latest PHP version updates
        </p>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 justify-center  lg:grid-cols-3 gap-6 mt-8">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#0866e2] w-[300px] sm:w-[350px] lg:w-[300px] h-[340px] rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-xl  mb-4">{skill.title}</h3>
                <div className="text-4xl mb-4">{skill.icon}</div>

                <ul className="text-left mt-2 space-y-2">
                  {skill.details.map((detail, i) => (
                    <li key={i} className=" text-lg text-white">
                      - {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhpTechnicalSkills;
