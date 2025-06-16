import React from 'react';
import { Clock, FileText, Code, Trophy, Calendar, Users } from 'lucide-react';

const Timeline = () => {
  const events = [
    {
      time: "Registration Open",
      title: "Team Registration",
      description: "Form teams of 1-4 members. Open to all undergraduate and postgraduate students across India. ₹50 per team member.",
      icon: <Users className="h-6 w-6" />,
      color: "blue"
    },
    {
      time: "Round 1 - 3 Days",
      title: "Idea Submission",
      description: "Submit your brief proposal in PDF or Google Slides format outlining problem, solution approach, and tech stack.",
      icon: <FileText className="h-6 w-6" />,
      color: "green"
    },
    {
      time: "Evaluation Period",
      title: "Round 1 Results",
      description: "Ideas evaluated on creativity, feasibility, and clarity. Selected teams advance to finals.",
      icon: <Clock className="h-6 w-6" />,
      color: "purple"
    },
    {
      time: "Round 2 - 5 Days",
      title: "Final Development",
      description: "Build your working project and create a 2-5 minute demo video with final pitch deck.",
      icon: <Code className="h-6 w-6" />,
      color: "yellow"
    },
    {
      time: "Final Submission",
      title: "Project Submission",
      description: "Submit GitHub repo/Google Drive link, demo video, and pitch deck via Unstop platform.",
      icon: <Calendar className="h-6 w-6" />,
      color: "cyan"
    },
    {
      time: "Results Day",
      title: "Winner Announcement",
      description: "Final evaluation and announcement of winners with prize distribution ceremony.",
      icon: <Trophy className="h-6 w-6" />,
      color: "orange"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "text-blue-400 bg-blue-500/20 border-blue-500/30",
      green: "text-green-400 bg-green-500/20 border-green-500/30",
      purple: "text-purple-400 bg-purple-500/20 border-purple-500/30",
      yellow: "text-yellow-400 bg-yellow-500/20 border-yellow-500/30",
      cyan: "text-cyan-400 bg-cyan-500/20 border-cyan-500/30",
      orange: "text-orange-400 bg-orange-500/20 border-orange-500/30"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="timeline" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hackathon <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Timeline</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Follow our structured two-round process designed to bring out the best innovative solutions.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500"></div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-800 z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className={`p-3 rounded-full border ${getColorClasses(event.color)}`}>
                        {event.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                        <p className="text-blue-400 font-medium">{event.time}</p>
                      </div>
                    </div>
                    <p className="text-gray-400">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Hackathon Rules</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-400">Eligibility</h4>
                <p className="text-gray-400 text-sm">Open to all undergraduate and postgraduate students across India. Teams of 1-4 members from any specialization.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-cyan-400">Originality</h4>
                <p className="text-gray-400 text-sm">All submissions must be original work. No plagiarism or duplication allowed. Learn from resources but don't copy.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-green-400">Deadlines</h4>
                <p className="text-gray-400 text-sm">Strict adherence to deadlines for each round. Late submissions will not be considered.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;