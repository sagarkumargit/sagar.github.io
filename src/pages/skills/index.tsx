'use client'
import Footer from '@/Components/Footer/footer';
import Header from '@/Components/Header/header';
import React, { useEffect, useState } from 'react';

const skillsData = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 80 },
  { name: 'JavaScript', level: 75 },
  { name: 'React', level: 90 },
  { name: 'Angular', level: 40 },
  { name: 'Node.js', level: 70 },
  { name: 'Problem Solving', level: 100 },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Header />
      <div className="p-8 flex flex-col min-h-screen">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        {skillsData.map((skill) => (
          <div key={skill.name} className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="font-medium">{skill.level}%</span>
            </div>
            <div className="relative w-full h-4 bg-gray-200 rounded">
              <div
                className={`absolute h-full bg-blue-500 rounded transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                style={{
                  width: isVisible ? `${skill.level}%` : '0%',
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Skills;
