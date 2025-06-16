import React from 'react';
import { Clock, Coffee, Presentation, Trophy } from 'lucide-react';

const Timeline: React.FC = () => {
  const events = [
    {
      time: "Friday, March 15",
      title: "Opening Ceremony",
      description: "Welcome reception, team formation, and project pitches",
      icon: <Coffee className="h-6 w-6" />,
      color: "blue"
    },
    {
      time: "Friday Evening",
      title: "Hacking Begins",
      description: "48 hours of intensive coding and development starts",
      icon: <Clock className="h-6 w-6" />,
      color: "green"
    },
    {
      time: "Saturday",
      title: "Workshops & Mentoring",
      description: "Technical workshops and one-on-one mentoring sessions",
      icon: <Coffee className="h-6 w-6" />,
      color: "purple"
    },
    {
      time: "Sunday Morning",
      title: "Final Submissions",
      description: "Code freeze and project submission deadline",
      icon: <Clock className="h-6 w-6" />,
      color: "yellow"
    },
    {
      time: "Sunday Afternoon",
      title: "Presentations",
      description: "Team presentations and project demonstrations",
      icon: <Presentation className="h-6 w-6" />,
      color: "cyan"
    },
    {
      time: "Sunday Evening",
      title: "Awards Ceremony",
      description: "Winner announcements and prize distribution",
      icon: <Trophy className="h-6 w-6" />,
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
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
            Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Timeline</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here's what to expect during our action-packed 48-hour hackathon experience.
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
            <h3 className="text-2xl font-bold text-white mb-4">Important Notes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-400">Check-in</h4>
                <p className="text-gray-400 text-sm">Registration opens at 5:00 PM on Friday. Bring your ID and confirmation email.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-cyan-400">Meals</h4>
                <p className="text-gray-400 text-sm">All meals and snacks are provided throughout the event. Dietary restrictions accommodated.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-green-400">Judging</h4>
                <p className="text-gray-400 text-sm">Projects judged on innovation, technical execution, and presentation quality.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;