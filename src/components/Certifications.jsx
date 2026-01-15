export default function Certifications() {
  const certs = [
    { 
      title: "Microsoft Excel with A.I. Masterclass", 
      desc: "This professional certificate verifies the successful completion of the Microsoft Excel with A.I. Masterclass (Self Learning) course by Shamsher Ali. Issued by Skill Course on December 18, 2025, the credential demonstrates proficiency in integrating artificial intelligence with advanced Excel workflows to enhance data productivity and analysis.",
      img: "/my-portfolio/images/Certificate_in_Excel_with_AI.png" 
    },
    { 
      title: "Data Analyst 101", 
      desc: "A foundational certification demonstrating a commitment to the core principles of data analysis and the technical skills required to kickstart a career in the data field.",
      img: "/my-portfolio/images/data__analyst101.png" 
    },
    { 
      title: "SQL for Data Analysis", 
      desc: "This credential verifies the ability to use SQL for complex data retrieval, manipulation, and analysis to drive data-informed decision-making.",
      img: "/my-portfolio/images/sqldata.png" 
    },
    { 
      title: "Power BI Fundamentals", 
      desc: "Confirms the successful mastery of Power BI basics, including data visualization techniques and the creation of interactive business intelligence dashboards.",
      img: "/my-portfolio/images/powerbiCert.png" 
    },
  ];

  return (
    <section id="certifications" className="p-8 bg-white">
      <h3 className="text-2xl font-bold mb-8 text-center">Certifications</h3>
      {/* Responsive grid: 1 col on mobile, 2 on md, 3 on lg */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certs.map(c => (
          <div 
            key={c.title} 
            className="bg-gray-50 p-4 rounded shadow flex flex-col items-center text-center"
          >
            <img 
              src={c.img} 
              alt={c.title} 
              className=" mb-4 object-contain"
            />
            <h4 className="text-lg font-semibold mb-2">{c.title}</h4>
            <p className="text-gray-600 text-sm">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
