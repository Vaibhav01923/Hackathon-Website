import React from "react";
import { Code, Lightbulb, Users, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Code className="h-12 w-12 text-blue-400" />,
      title: "Code & Create",
      description:
        "Build innovative solutions using cutting-edge technologies and frameworks.",
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-yellow-400" />,
      title: "Innovation Focus",
      description:
        "Push boundaries and create solutions that can make a real-world impact.",
    },
    {
      icon: <Users className="h-12 w-12 text-green-400" />,
      title: "Team Collaboration",
      description:
        "Network with talented developers, designers, and entrepreneurs.",
    },
    {
      icon: <Award className="h-12 w-12 text-purple-400" />,
      title: "Win Big",
      description:
        "Compete for substantial prizes and recognition from industry leaders.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              BitBattles
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            BitBattles is more than just a hackathon—it's a celebration of
            innovation, creativity, and the power of technology to solve
            real-world problems. Join us for an unforgettable experience of
            coding, learning, and building the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-gray-700/50 rounded-full group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 md:p-12 border border-blue-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                What to Expect
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>48 hours of intensive coding and creativity</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Mentorship from industry experts and successful
                    entrepreneurs
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Workshops on cutting-edge technologies and best practices
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    Networking opportunities with like-minded developers
                  </span>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-2">
                  Theme Categories
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                    AI/ML
                  </span>
                  <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
                    Web Dev
                  </span>
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                    Web3
                  </span>
                  <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">
                    Mern Stack Development
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
