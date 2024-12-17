import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function JobOpenings() {
  const [selectedRole, setSelectedRole] = useState("javaDeveloper"); // Default role

  useEffect(() => {
    AOS.init({
      duration: 1000,
    }); // Initialize AOS for other animations if needed
  }, []);
  const jobDetails = {
    javaDeveloper: {
      role: "Java Developer",
      description: [
        "Proficient in core Java with excellent knowledge.",
        "Experience with Java frameworks such as Spring and Hibernate.",
        "Understanding of RESTful web services.",
        "Knowledge of relational database management systems like MySQL or Oracle.",
        "Familiarity with front-end technologies (HTML, CSS, JavaScript).",
        "Experience in application development and deployment using tools like Maven or Gradle.",
        "Version control using Git.",
      ],
      goodToHave: [
        "Experience with microservices architecture.",
        "Knowledge of cloud platforms (AWS, Azure).",
        "Understanding of containerization (Docker, Kubernetes).",
        "Experience with NoSQL databases (MongoDB, Cassandra).",
        "Participation in hackathons or coding competitions.",
        "Understanding of DevOps practices.",
      ],
    },
    androidIosDeveloper: {
      role: "Android & iOS Developer",
      description: [
        "Proficient in Android SDK, Swift, or Objective-C.",
        "Experience with mobile application development lifecycle.",
        "Knowledge of RESTful APIs to connect mobile applications to back-end services.",
        "Familiarity with UI/UX design principles for mobile platforms.",
        "Understanding of version control systems like Git.",
      ],
      goodToHave: [
        "Experience with cross-platform frameworks like Flutter or React Native.",
        "Knowledge of publishing apps on Google Play Store and Apple App Store.",
        "Familiarity with mobile performance optimization techniques.",
      ],
    },
    fullStackDeveloper: {
      role: "Full Stack Developer",
      description: [
        "Proficient in both front-end and back-end technologies (React, Angular, Node.js, Python).",
        "Knowledge of relational and NoSQL databases (MySQL, MongoDB).",
        "Understanding of RESTful and GraphQL APIs.",
        "Familiarity with deployment tools and processes (Docker, Kubernetes).",
        "Experience with cloud services like AWS or Azure.",
      ],
      goodToHave: [
        "Understanding of CI/CD pipelines.",
        "Experience with serverless architecture.",
        "Knowledge of microservices.",
      ],
    },
    reactJsDeveloper: {
      role: "ReactJS Developer",
      description: [
        "Strong knowledge of ReactJS, Redux, and modern JavaScript (ES6+).",
        "Experience with building reusable components.",
        "Familiarity with React Hooks and functional components.",
        "Understanding of RESTful APIs and integration.",
        "Proficient in HTML, CSS, and responsive design.",
      ],
      goodToHave: [
        "Experience with testing libraries like Jest or Enzyme.",
        "Familiarity with state management libraries like MobX.",
        "Understanding of server-side rendering and Next.js.",
      ],
    },
    phpDeveloper: {
      role: "PHP Developer",
      description: [
        "Proficient in PHP and PHP frameworks like Laravel or CodeIgniter.",
        "Knowledge of MySQL and database optimization techniques.",
        "Understanding of MVC architecture.",
        "Experience with front-end technologies (HTML, CSS, JavaScript).",
        "Familiarity with RESTful APIs and third-party integrations.",
      ],
      goodToHave: [
        "Experience with CMS platforms like WordPress or Joomla.",
        "Knowledge of version control (Git).",
        "Understanding of security best practices for web applications.",
      ],
    },
    businessDevelopmentManager: {
      role: "Business Development Manager",
      description: [
        "Strong understanding of sales and marketing principles.",
        "Proven experience in building and maintaining client relationships.",
        "Excellent communication and negotiation skills.",
        "Ability to develop and implement business growth strategies.",
        "Familiarity with CRM tools and data analytics.",
      ],
      goodToHave: [
        "Experience in the tech or software industry.",
        "Knowledge of market trends and competitor analysis.",
        "Understanding of project management tools like JIRA or Trello.",
      ],
    },
  };

  const handleToggle = (role) => {
    setSelectedRole(role); // Update selected role
  };

  const { role, description, goodToHave } = jobDetails[selectedRole];

  return (
    <div className="min-h-screen p-6 mx-4 relative">
      <div className="flex flex-col lg:flex-row">
        {/* Left Side: Buttons */}
        <div className="lg:w-[30%] w-auto mt-20 space-y-7"
        data-aos="fade-left"
        >
          {Object.keys(jobDetails).map((key) => (
            <button
              key={key}
              className={`block w-full shadow-lg p-5 font-semibold text-center text-lg rounded-lg ${
                selectedRole === key
                  ? "bg-white border border-gray-300 bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text"
                  : "bg-gradient-to-r from-[#00ceff] to-[#0072ff] text-white"
              }`}
              onClick={() => handleToggle(key)}
            >
              {jobDetails[key].role}
            </button>
          ))}
        </div>

        {/* Right Side: Job Details */}
        <div className="lg:w-[50%] w-auto p-6 rounded-lg ml-2 lg:ml-auto"
        data-aos="fade-right"
        >
          <div className="text-center my-6 mx-10">
            <p className="lg:text-3xl text-xl bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text">
              Job Description
            </p>
          </div>
          <div className="text-start">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text mb-4">
              {role}
            </h2>
          </div>
          <div className="text-start">
            <ul className="list-disc list-inside text-black text-lg space-y-2">
              {description.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
            <h3 className="my-6 text-xl font-semibold bg-gradient-to-r from-[#00ceff] to-[#0072ff] inline-block text-transparent bg-clip-text">
              Good To Have:
            </h3>
            <ul className="list-disc list-inside mt-2 space-y-2">
              {goodToHave.map((item, index) => (
                <li key={index} className="text-black  font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-start mt-4 items-center"
          data-aos="fade-down"
          >
            <button className="bg-gradient-to-r from-[#00ceff] to-[#0072ff] text-white py-3 px-8 rounded-lg shadow-md">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobOpenings;
