import React from 'react';
import picvei from '../assets/pictures/picvei.jpeg';
import ali from '../assets/pictures/ali.png';
import athila from '../assets/pictures/athila.png';
import jenny from '../assets/pictures/jenny.png';
import sena from '../assets/pictures/sena.png';
import samuel from '../assets/pictures/samuel.png';

const developers = [
  {
    name: "Veiron Vaya Yarief",
    hobby: "Badminton",
    image: picvei,
    role: "Full Stack Developer",
    gradient: "from-blue-500 to-purple-600",
    stats: { projects: "15+", clients: "8+", rating: "4.9/5" }
  },
  {
    name: "Ali Muhammad Arsyad",
    hobby: "Basket",
    image: ali,
    role: "Frontend Developer",
    gradient: "from-green-400 to-blue-500",
    stats: { projects: "12+", clients: "6+", rating: "4.8/5" }
  },
  {
    name: "Athila Ramdani Saputra",
    hobby: "Main Roblox",
    image: athila,
    role: "Game Developer",
    gradient: "from-purple-500 to-pink-500",
    stats: { projects: "20+", clients: "10+", rating: "4.9/5" }
  },
  {
    name: "Jeany Ferliza Nayla",
    hobby: "Lari",
    image: jenny,
    role: "UI/UX Designer",
    gradient: "from-pink-400 to-red-500",
    stats: { projects: "18+", clients: "12+", rating: "5.0/5" }
  },
  {
    name: "Sena Rizky Pratama",
    hobby: "Hiking",
    image: sena,
    role: "Backend Developer",
    gradient: "from-yellow-400 to-orange-500",
    stats: { projects: "14+", clients: "9+", rating: "4.8/5" }
  },
  {
    name: "Samuel Yonanes",
    hobby: "Benci Roblox",
    image: samuel,
    role: "DevOps Engineer",
    gradient: "from-indigo-500 to-purple-600",
    stats: { projects: "11+", clients: "7+", rating: "4.7/5" }
  }
];

export default function Developer() {
  return (
    <div className="py-16 px-4 lg:px-0 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Hall of Fame Mahasiswa
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Meet our talented development team who bring creativity and innovation to every project
          </p>
        </div>

        {/* Developers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {developers.map((developer, index) => (
            <div key={index} className="group relative">
              <div className={`bg-gradient-to-br ${developer.gradient} rounded-3xl p-8 overflow-hidden relative min-h-[400px] transform transition-all duration-500 hover:scale-105 hover:shadow-2xl`}>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white transform translate-x-32 -translate-y-32"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white transform -translate-x-24 translate-y-24"></div>
                </div>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col md:flex-row items-center h-full">
                  
                  {/* Left Content */}
                  <div className="flex-1 text-white mb-6 md:mb-0 md:pr-8 text-center md:text-left">
                    <p className="text-sm opacity-80 mb-2 uppercase tracking-wider">HEY THERE!</p>
                    
                    <h3 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
                      {developer.name.split(' ')[0]} <br />
                      <span className="text-2xl md:text-3xl">
                        {developer.name.split(' ').slice(1).join(' ')}
                      </span>
                    </h3>
                    
                    <p className="text-lg opacity-90 mb-6 font-medium">
                      {developer.role}
                    </p>

                    {/* Hobby */}
                    <div className="mb-6">
                      <p className="text-sm opacity-80">Hobby:</p>
                      <p className="text-lg font-semibold">{developer.hobby}</p>
                    </div>

                    {/* CTA Button */}
                    <button className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transform transition-all duration-300 hover:scale-105 shadow-lg">
                      SEE MY WORK
                    </button>

                    {/* Social Media Icons */}
                    <div className="flex justify-center md:justify-start space-x-4 mt-6">
                      <a href="https://github.com/VeironVaya" target="_blank" rel="noopener noreferrer" 
                         className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.72.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.56-.29-5.26-1.28-5.26-5.72 0-1.26.45-2.3 1.18-3.11-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.85 1.18 3.11 0 4.45-2.7 5.42-5.28 5.71.41.35.78 1.04.78 2.1 0 1.52-.01 2.75-.01 3.12 0 .3.2.66.79.55A10.51 10.51 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/in/veiron-vaya-yarief-5867872a3/" target="_blank" rel="noopener noreferrer"
                         className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.451 20.451h-3.554v-5.561c0-1.327-.025-3.037-1.85-3.037-1.853 0-2.136 1.446-2.136 2.941v5.657H9.358V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.602 0 4.269 2.372 4.269 5.457v6.284zM5.337 7.433c-1.144 0-2.072-.928-2.072-2.072 0-1.144.928-2.072 2.072-2.072 1.144 0 2.072.928 2.072 2.072 0 1.144-.928 2.072-2.072 2.072zM7.118 20.451H3.556V9h3.562v11.451z" />
                        </svg>
                      </a>
                      <a href="https://www.instagram.com/veiron.co.id?igsh=Y2Vsc2l1cHhyZWht" target="_blank" rel="noopener noreferrer"
                         className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5z" />
                          <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" />
                          <circle cx="17.5" cy="6.5" r="1.5" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Right Content - Image and Stats */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    {/* Profile Image */}
                    <div className="relative mb-6">
                      <img
                        src={developer.image}
                        alt={developer.name}
                        className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-2xl transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 text-center text-white">
                      <div className="bg-white bg-opacity-20 rounded-lg p-3 backdrop-blur-sm">
                        <div className="text-2xl font-bold">{developer.stats.projects}</div>
                        <div className="text-xs opacity-80 uppercase tracking-wide">Projects</div>
                      </div>
                      <div className="bg-white bg-opacity-20 rounded-lg p-3 backdrop-blur-sm">
                        <div className="text-2xl font-bold">{developer.stats.clients}</div>
                        <div className="text-xs opacity-80 uppercase tracking-wide">Happy Clients</div>
                      </div>
                      <div className="bg-white bg-opacity-20 rounded-lg p-3 backdrop-blur-sm">
                        <div className="text-2xl font-bold">{developer.stats.rating}</div>
                        <div className="text-xs opacity-80 uppercase tracking-wide">Average Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}