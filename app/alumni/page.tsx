'use client'

import { useState } from 'react'
import Footer from '@/components/footer'

const alumniByYear = [
  {
    year: 2024,
    names: ['Ronak Gandhi', 'Kalpesh Hadkar', 'Archit Yadav', 'Dhruv Kale', 'Aditi Holey', 'Nish Salia', 'Kush Shetty', 'Niyati Rolia', 'Sahil Shirke'],
  },
  {
    year: 2023,
    names: ['Omkar Bhandhari', 'Smit Bhenjaliya', 'Priyanshu Vanigota', 'Dhruvi Patel', 'Pinaki Jayakar', 'Yoshi Vasowala'],
  },
  {
    year: 2022,
    names: ['Krutik Chavda', 'Hiket Vira', 'Jas Prajapati', 'Vaibhav Parekh'],
  },
  {
    year: 2021,
    names: ['Yuvraj Dalvi', 'Aman Pandit', 'Malhar Kharat', 'Sandeep Jagdale', 'Prashant Joshi'],
  },
  {
    year: 2020,
    names: ['Jay Nakrani', 'Tanishq Parikh', 'Cherag Mevawala', 'Ashok Mourya', 'Omkar Ghuge', 'Kushal Deokar'],
  },
  {
    year: 2019,
    names: ['Abdulqadir Vhora', 'Paresh Vora'],
  },
  {
    year: 2017,
    names: ['Fahim Choudhary'],
  },
  {
    year: 2016,
    names: ['Pragnesh Bhalala', 'Varun Mahajan', 'Tejas Thorat'],
  },
  {
    year: 2015,
    names: ['Dhruv Malde', 'Akshara Moudgalya', 'Nikhil Modi'],
  },
]

export default function Alumni() {
  const [hoveredYear, setHoveredYear] = useState<number | null>(null)

  return (
    <main className="bg-white text-gray-900">
      
      <div className="pt-8 pb-16">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 mb-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-900">
              ETA HALL OF FAME
            </h1>
            <p className="text-xl md:text-2xl text-teal-600 font-light mb-8">Honoring Our Legacy</p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-6">
              It all started in 2013, when a group of students from K.J. Somaiya College of Engineering felt the need to use their technical knowledge and management skills to develop and innovate technology for the benefit of mankind. What began as an idea has blossomed into Team ETA, a passionate collective of engineers, designers, and innovators pushing the boundaries of automotive excellence and sustainability.
            </p>
          </div>
        </section>

        {/* Interactive Timeline Section */}
        <section className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Our Alumni</h2>
          
          {/* Vertical Timeline */}
          <div className="space-y-8">
            {alumniByYear.map((cohort, index) => (
              <div
                key={cohort.year}
                className="group relative"
                onMouseEnter={() => setHoveredYear(cohort.year)}
                onMouseLeave={() => setHoveredYear(null)}
              >
                {/* Timeline Connector */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-600 via-blue-500 to-transparent transform -translate-x-2"></div>

                {/* Timeline Dot */}
                <div className={`absolute -left-5 top-0 w-9 h-9 bg-white border-4 rounded-full transition-all duration-300 ${
                  hoveredYear === cohort.year ? 'border-teal-600 scale-125 shadow-lg shadow-teal-600/50' : 'border-gray-300'
                }`}></div>

                {/* Content Card */}
                <div className={`ml-12 p-6 rounded-lg border transition-all duration-300 ${
                  hoveredYear === cohort.year 
                    ? 'bg-white border-teal-600/50 shadow-lg shadow-teal-600/20 scale-105' 
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}>
                  {/* Year Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-3xl font-bold text-teal-600">
                      {cohort.year}
                    </span>
                    <span className="text-sm text-gray-600 font-medium">Class of {cohort.year}</span>
                  </div>

                  {/* Names Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {cohort.names.map((name, idx) => (
                      <div
                        key={idx}
                        className="group/name flex items-center gap-2 p-3 rounded-md bg-gray-50 hover:bg-teal-50 transition-all duration-200"
                      >
                        <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                        <span className="text-gray-900 group-hover/name:text-teal-700 transition-colors font-medium text-sm md:text-base">
                          {name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Alumni Count */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <span className="text-xs text-gray-500 font-mono">
                      {cohort.names.length} member{cohort.names.length > 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Legacy Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 bg-gray-50 p-8 rounded-lg border border-gray-200">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">
                {alumniByYear.reduce((sum, cohort) => sum + cohort.names.length, 0)}
              </div>
              <p className="text-gray-600 text-sm">Total Alumni</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">
                {alumniByYear.length}
              </div>
              <p className="text-gray-600 text-sm">Graduating Classes</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">
                {alumniByYear[0].year - alumniByYear[alumniByYear.length - 1].year + 1}
              </div>
              <p className="text-gray-600 text-sm">Years of History</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">
                2013
              </div>
              <p className="text-gray-600 text-sm">Founded</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
