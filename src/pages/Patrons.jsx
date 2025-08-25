import React from 'react'

const members = {
  Patron: [
    {
      name: "Prof. Sangeeta Shukla",
      image: "https://www.ccsuniversity.ac.in/assets/images/vc-img.jpg",
      designation: "(Hon’ble Vice Chancellor)"
    },
  ],
  "Co-Patron": [
    {
      name: "Prof. Sanjeev Kumar Sharma ",
      image: "https://www.ccsuniversity.ac.in/assets/images/administration/Sanjeev%20Kumar%20Sharma.png",
      designation: "(Director, Academics)"
    },
    {
      name: "Prof. Beer Pal Singh",
      image: "https://ccsuniversity.blr1.cdn.digitaloceanspaces.com/public/jpg/2024/05/administration/prof-beerpal.jpg",
      designation: "(Director, Research & Development)"
    },
    {
      name: "Prof. Jaimala ",
      image: "https://www.ccsuniversity.ac.in/assets/images/administration/Prof.%20Jaimala.png",
      designation: "(Dean of Science)"
    },
  ],
  Convener: [
    {
      name: "Prof. Anil Kumar Malik",
      image: "https://cdn.ccsuniversity.ac.in/cv/jpg/P125.jpg",
      designation: "CCSU, Meerut"
    },
  ],
  "Co-Convener": [
    {
      name: "Prof. Anuj Kumar",
      image: "https://cdn.ccsuniversity.ac.in/cv/jpg/P124.jpg",
      designation: "CCSU, Meerut"
    },
    {
      name: "Prof. Sanjeev Kumar Sharma",
      image: "https://cdn.ccsuniversity.ac.in/cv/jpg/P126.jpg",
      designation: "CCSU, Meerut"
    },
  ],
  "Organizing Secretary": [
    {
      name: "Dr. Neeraj Panwar",
      image: "https://cdn.ccsuniversity.ac.in/cv/jpg/Dr.%20neeraj%20.jpg",
      designation: "CCSU, Meerut"
    },
    {
      name: "Dr. Yogendra Kumar Gautam",
      image: "https://cdn.ccsuniversity.ac.in/cv/jpg/prof%20yogendra.jpg",
      designation: "CCSU, Meerut"
    },
  ],
  "Organizing Joint Secretary": [
    {
      name: "Dr. Anil Kumar Yadav",
      image: "https://cdn.ccsuniversity.ac.in/cv/jpg/P128.jpg",
      designation: "CCSU, Meerut"
    },
    {
      name: "Dr. Kavita Sharma",
      image: "https://cdn.ccsuniversity.ac.in/cv/jpg/Dr.%20kavita%20.jpg",
      designation: "CCSU, Meerut"
    },
    {
      name: "Dr. Vivek Kumar Nautiyal",
      image: "https://cdn.ccsuniversity.ac.in/cv/jpg/vivek-nautiyal.jpg",
      designation: "CCSU, Meerut"
    },
  ],
};

const Patrons = () => {
  return (
    <>
    <section className="py-16 px-6 bg-gray-50">
      {/* <h2 className="text-3xl font-bold text-center text-orange-800 mb-12">
        Committee Members
      </h2> */}

      <div className="max-w-7xl mx-auto space-y-16">
        {Object.entries(members).map(([category, people]) => (
          <div key={category}>
            {/* Category Title */}
            <h3 className="text-3xl font-semibold text-orange-700 mb-8 text-center">
              {category}
            </h3>

            {/* Members Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {people.map((person, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-36 h-36 rounded-full object-cover mb-4 border-4 border-orange-200"
                  />
                  <h4 className="text-lg font-semibold text-gray-800">
                    {person.name}
                  </h4>
                  <p className="text-orange-600 font-medium">{person.designation}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default Patrons