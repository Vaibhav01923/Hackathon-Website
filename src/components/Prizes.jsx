import React from "react";
import { Trophy, Award, Medal, Gift } from "lucide-react";

const Prizes = () => {
  const prizes = [
    {
      position: "Winner",
      amount: "₹1,500",
      certificate: "Winner Certificate",
      icon: <Trophy className="h-12 w-12 text-yellow-400" />,
      color: "from-yellow-400 to-orange-400",
      bgColor: "bg-yellow-500/20",
      borderColor: "border-yellow-500/30",
    },
    {
      position: "First Runner Up",
      amount: "CERTIFICATE",
      certificate: "First Runner Up Certificate",
      icon: <Award className="h-12 w-12 text-gray-300" />,
      color: "from-gray-300 to-gray-400",
      bgColor: "bg-gray-500/20",
      borderColor: "border-gray-500/30",
    },
    {
      position: "Second Runner Up",
      amount: "CERTIFICATE",
      certificate: "Second Runner Up Certificate",
      icon: <Medal className="h-12 w-12 text-amber-600" />,
      color: "from-amber-600 to-amber-700",
      bgColor: "bg-amber-600/20",
      borderColor: "border-amber-600/30",
    },
  ];

  return (
    <section id="prizes" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prizes &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Recognition
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compete for exciting cash prizes and certificates that recognize
            your innovation and hard work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {prizes.map((prize, index) => (
            <div key={index} className="group">
              <div
                className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${prize.borderColor} hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl`}
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  <div
                    className={`p-6 ${prize.bgColor} rounded-full group-hover:scale-110 transition-transform duration-300 border ${prize.borderColor}`}
                  >
                    {prize.icon}
                  </div>
                  <div className="space-y-2">
                    <h3
                      className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${prize.color}`}
                    >
                      {prize.position}
                    </h3>
                    <div className="space-y-1">
                      <p className="text-3xl font-bold text-white">
                        {prize.amount}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {prize.certificate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Participation Certificate Section */}
        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 md:p-12 border border-blue-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="p-4 bg-blue-500/20 rounded-full border border-blue-500/30">
                <Gift className="h-10 w-10 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Participation Certificate
                </h3>
                <p className="text-gray-400">
                  Every participant receives a certificate of participation to
                  acknowledge their effort and contribution to the hackathon.
                </p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-lg font-semibold text-blue-400">
                For All Participants
              </p>
              <p className="text-gray-400 text-sm">Digital Certificate</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h4 className="text-xl font-semibold text-white mb-4">
              Prize Distribution
            </h4>
            <p className="text-gray-400">
              All prizes will be distributed digitally after the final
              evaluation. Certificates will be sent via email, and cash prizes
              will be transferred to the winning teams' accounts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
