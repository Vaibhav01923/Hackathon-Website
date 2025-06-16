import React from "react";
import { Calendar, MapPin, Trophy, Users } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import GoogleAuth from "./GoogleAuth";

const Hero = () => {
  const { user } = useAuth();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Bit
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Battles
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-light text-gray-300">
              Hackathon 2025
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Where code meets creativity. Join developers from around the world
              in 48 hours of innovation, collaboration, and breakthrough
              solutions.
            </p>
          </div>

          {/* Event Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <Calendar className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold">March 15-17</h3>
              <p className="text-gray-400 text-sm">48 Hours</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <MapPin className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold">Hybrid Event</h3>
              <p className="text-gray-400 text-sm">In-person & Virtual</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <Trophy className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold">$50K Prizes</h3>
              <p className="text-gray-400 text-sm">Multiple Categories</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <Users className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold">500+ Hackers</h3>
              <p className="text-gray-400 text-sm">Global Community</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 space-y-6">
            {user ? (
              <div className="space-y-4">
                <p className="text-xl text-green-400">
                  Welcome back, {user.name}!
                </p>
                <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Complete Registration
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-lg text-gray-300">
                  Ready to join the battle?
                </p>
                <div className="flex flex-col items-center space-y-4"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
