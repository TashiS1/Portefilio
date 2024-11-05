import React from 'react';

interface SkillBadgeProps {
  name: string;
  icon: React.ReactNode;
  level: number;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, icon, level }) => {
  return (
    <div className="bg-gray-800/50 p-6 rounded-xl hover:transform hover:scale-105 transition duration-300">
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBadge;