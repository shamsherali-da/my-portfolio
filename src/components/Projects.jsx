export default function Projects() {
  const projects = [
    { 
      title: "Credit Card Dashboard Project | Power BI + Excel + SQL", 
      desc: "Developed a data‑driven analytics solution using Power BI, Excel, and SQL to deliver real‑time insights into customer behavior, revenue trends, and operational performance. For the client, this dashboard enabled better KPI tracking, improved revenue forecasting, and faster decision‑making.", 
      img: "/my-portfolio/images/powerbi_sql_prj.png",
      linkedin: "https://www.linkedin.com/posts/shamsherali-da_dataanalytics-powerbi-sql-activity-7413619440908390400-Sdn0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFDHTYEBa7ToCT0-yEYEyg2VhXZbZoI7sao ", 
      drive: "https://drive.google.com/file/d/your-demo-link/view",
      github: "https://github.com/shamsherali-da/creditCard-PowerBI-project"
    },
    { 
      title: "Ecommerce Sales Dashboard | Tableau", 
      desc: "Built an interactive Tableau dashboard to analyze YTD sales, profit, market share, and category performance across regions. The client leveraged this tool to identify underperforming categories, optimize marketing strategies, and strengthen regional sales growth.", 
      img: "/my-portfolio/images/tableau_prj.png",
      linkedin: "https://www.linkedin.com/posts/shamsherali-da_tableau-datavisualization-businessintelligence-activity-7417449233252864000-dyqo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFDHTYEBa7ToCT0-yEYEyg2VhXZbZoI7sao", 
      drive: "https://drive.google.com/file/d/your-demo-link/view",
      github: "https://github.com/shamsherali-da/Ecommerce_dashbboard_tableau"
    },
    { 
      title: "HR Analytic Dashboard | Power BI ", 
      desc: "This interactive Power BI dashboard provides a data-driven overview of employee retention for the company. It enables the client to monitor key performance indicators such as a 16.1% attrition rate and salary distributions to identify trends across departments and demographics, ultimately supporting strategic workforce planning and talent management.", 
      img: "/my-portfolio/images/hr_analytic.png",
      linkedin: "https://www.linkedin.com/posts/shamsherali-da_hranalytics-powerbi-employeeretention-activity-7357723215374221312-izCx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFDHTYEBa7ToCT0-yEYEyg2VhXZbZoI7sao", 
      drive: "https://drive.google.com/file/d/your-demo-link/view",
      github: "https://github.com/shamsherali-da/HR_Analytic_dashboard_powerBI"
    },
  ];

  return (
    <section id="projects" className="p-8 bg-gray-50">
      <h3 className="text-2xl font-bold mb-8 text-center">Projects</h3>
      {/* Responsive grid: 1 col on mobile, 2 on md, 3 on lg */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(p => (
          <div 
            key={p.title} 
            className="bg-white p-4 rounded shadow flex flex-col items-center text-center"
          >
            <img 
              src={p.img} 
              alt={p.title} 
              className="mb-4 object-contain"
            />
            <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
            <p className="text-gray-600 mb-4">{p.desc}</p>

            {/* Links section with icons */}
            <div className="flex space-x-6 justify-center">
              <a href={p.linkedin} target="_blank" rel="noopener noreferrer">
                <img 
                  src="/my-portfolio/images/linkedin.svg" 
                  alt="LinkedIn" 
                  className="w-6 h-6 hover:opacity-80"
                />
              </a>
              <a href={p.github} target="_blank" rel="noopener noreferrer">
                <img 
                  src="/my-portfolio/images/github.svg" 
                  alt="GitHub" 
                  className="w-6 h-6 hover:opacity-80"
                />
              </a>
              <a href={p.drive} target="_blank" rel="noopener noreferrer">
                <img 
                  src="/my-portfolio/images/gd.svg" 
                  alt="Google Drive" 
                  className="w-6 h-6 hover:opacity-80"
                />
              </a>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



{/* <img 
        src="images/music_store_analysis_screenshot.png"   // path relative to public folder
        alt="Project preview" 
        width="300" 
      /> */}