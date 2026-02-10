export default function Skills() {
  const skills = [
    
    {
      title: "HTML 5 ",
      icon: "/my-portfolio/images/html5.png",      
    },
    {
      title: "CSS 3 ",
      icon: "/my-portfolio/images/css3.png",      
    },
    {
      title: "JavaScript",
      icon: "/my-portfolio/images/js.png",      
    },
    {
      title: "Bootstrap 5",
      icon: "/my-portfolio/images/bootstrap.png",      
    },
    {
      title: "React Js",
      icon: "/my-portfolio/images/reactjs.png",      
    },
    {
      title: "Tailwind CSS ",
      icon: "/my-portfolio/images/tailwindcss.png",      
    },
    {
      title: "Node JS",
      icon: "/my-portfolio/images/nodejs.png",      
    },
    {
      title: "Express JS",
      icon: "/my-portfolio/images/expressjs.png",      
    },
    {
      title: "Mongo DB",
      icon: "/my-portfolio/images/mongodb.png",      
    },
    {
      title: "Advanced Excel",
      icon: "/my-portfolio/images/microsoft-excel.svg",      
    },
    {
      title: "AI + Prompting ",
      icon: "/my-portfolio/images/ai.png",      
    },
    {
      title: "Power Query",
      icon: "/my-portfolio/images/pq.png",    
    },
    {
      title: "MYSQL & PostGreSQL",
      icon: "/my-portfolio/images/postgresql.svg",    
    },
    {
      title: "Microsoft Power BI",
      icon: "/my-portfolio/images/pbi.png",    
    },
    {
      title: "Tableau",
      icon: "/my-portfolio/images/tableau.png",    
    },
    {
      title: "Python",
      icon: "/my-portfolio/images/python.svg",    
    },
    {
      title: "Pandas",
      icon: "/my-portfolio/images/Pandas.svg",    
    },
    {
      title: "NumPy",
      icon: "/my-portfolio/images/NumPy.svg",    
    }
    
  ];

  return (
    <section id="skills" className="p-8 bg-white">
      <h3 className="text-2xl font-bold mb-4 text-center">Area of Expertise</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map(dt => (
          <div key={dt.title} className="bg-gray-100 p-4 rounded shadow text-center font-semibold">
            <img src={dt.icon} alt={dt.title} className="mx-auto h-12 w-12 mb-2" />
            {dt.title}
          </div>
        ))}
      </div>
    </section>
  );
}
