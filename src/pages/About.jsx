import React from 'react'
import ccsuimg from "../assets/images/ccsumaingate.jpg"
import phydept from "../assets/images/phy_department.jpg"

const About = () => {
  return (
    <>
        {/* About CCSU Section */}
        <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* Image */}
            <div className="flex justify-center">
                <img 
                src={ccsuimg}
                alt="CCSU Meerut"
                className="rounded-2xl shadow-2xl w-full max-w-3xl object-cover"
                />
            </div>

            {/* Text */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-orange-600 mb-4">
                About Chaudhary Charan Singh University (CCSU), Meerut
                </h2>
                <p className="text-gray-700 leading-relaxed text-justify">
                Chaudhary Charan Singh University (CCSU), established in 1965, 
                is one of the premier educational institutions of India, 
                encompassing a vast, beautiful, and pollution-free campus 
                sprawling over 222 acres of land with vast playgrounds, 
                experimental facilities, a botanical garden, a rose garden, 
                Central Instrumental Facility, Gymnasium, Indoor Stadium, 
                Library, Hostels, Guest House, Medical Centre, and more.
                </p>
                <p className="text-gray-700 leading-relaxed mt-3 text-justify">
                The University affiliates 714 aided, government, and self-financing 
                colleges/institutions, catering to more than 5.25 lakh students. 
                Recently, CCSU was awarded <b>A++ grade (CGPA 3.66) by NAAC</b>, 
                ranked among top 100 state universities in India as per NIRF-2024, 
                and achieved <b>222 rank in QS-2025</b> Southern Asian Universities ranking. 
                It was also recognized as “The Best State University” in Research 
                Citation Award-2023 by Clarivate (Web of Science).
                </p>
            </div>
            </div>
        </div>
        </section>

        {/* About Department Section */}
<section className="py-12 bg-gray-50">
  <div className="container mx-auto px-6 md:px-12">
    <div className="grid md:grid-cols-2 gap-8 items-center">

      {/* Image (shown first on mobile) */}
      <div className="flex justify-center order-1 md:order-2">
        <img
          src={phydept}
          alt="CCSU Meerut"
          className="rounded-2xl shadow-2xl w-full max-w-3xl object-cover"
        />
      </div>

      {/* Text (shown below image on mobile, left on desktop) */}
      <div className="bg-white p-6 rounded-2xl shadow-lg order-2 md:order-1">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">
          Department of Physics, Chaudhary Charan Singh
          University Meerut, Uttar Pradesh INDIA
        </h2>
        <p className="text-gray-700 leading-relaxed text-justify">
          The Department of Physics, established in 1969, is a
          research-oriented DST-FIST funded academic unit of
          Chaudhary Charan Singh University Meerut. The
          Department offers NEP-2020 based programs in Ph.D., M.Sc.
          with four specializations: Electronics, Nanoscience and
          Nanotechnology, Optoelectronics and Advanced Solid State
          Physics, and B.Sc. (Honors with research) for young and
          dynamic minds. More than 30 students are pursuing Ph.D. in
          the thrust areas of material science and photonics.
        </p>
        <p className="text-gray-700 leading-relaxed mt-3 text-justify">
          The Department has been awarded with three center of excellence
          by the Higher Education department, Government of Uttar
          Pradesh (India) and actively involved in research covering a
          wide variety of frontier areas in Materials Science and
          photonics such as Renewable Energy, Hydrogen storage and
          Gas sensors, Superconductors, Biomaterials & Bio-/ChemoSensors,
          Energy storage devices, Photocatalysis, Antimicrobial,
          Waste-water treatment, Photonics and Metamaterials. The
          Department has several ongoing projects supported by various
          funding agencies and has active research collaborations at
          National and International levels.
        </p>
      </div>

    </div>
  </div>
</section>

        {/* Meerut Historical Background Section */}
        <section className="py-12 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">
            Meerut : Historical Background
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 text-justify">
            The historic city of Meerut dating back from Ramayana and with relics 
            from Mahabharata period is located in the western part of the state 
            Uttar Pradesh, India. Meerut is known as the gateway to Hastinapur—the 
            quintessential site of the epic Mahabharata. Relics and remains dating 
            back to this period prove that this region was the capital of the 
            Kauravas and Pandavas.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 text-justify mt-4">
            Meerut city is located 80 km northeast of the national capital New 
            Delhi, and 480 km west of the state capital, Lucknow. Meerut is one of 
            the largest manufacturers of sports goods in the country, known as the 
            <span className="font-semibold"> "Sports City of India"</span>. The city 
            is also known as the largest manufacturer of musical instruments in the 
            country, as well as one of Asia's biggest gold markets. The city is also 
            an education hub in western Uttar Pradesh.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 text-justify mt-4">
            Meerut is famously associated with the 1857 first freedom struggle 
            against Company rule in India. The famous slogan 
            <span className="italic"> "Dilli Chalo" ("Let's march to Delhi!")</span> 
            was first spoken in the city, and the Meerut cantonment was the place 
            where the rebellion started. The city is surrounded by beautiful farmland 
            and has pleasant weather in March. Historic towns such as Sardhana, 
            Haridwar, Rishikesh, and Garhmuketshwar are situated within 100 km radius 
            from Meerut.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 text-justify mt-4">
            The city has beautiful and historical places nearby. India's first 
            Regional Rapid Transit System (RRTS) connects the National capital New 
            Delhi to Meerut.
            </p>
        </div>
        </section>
        
    </>
  )
}

export default About