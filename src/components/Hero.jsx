export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-purple-800 text-white py-20 flex flex-col md:flex-row items-center justify-center">
  {/* Left Side: Text */}
  <div className="text-center md:text-left md:w-1/2 px-6">
  <h2 className="text-3xl font-bold mb-4">
   Building Scalable Web Solutions with Modern Technologies
  </h2>
  <p className="text-lg">
    Software Engineer | MERN Stack Developer | Frontend & Backend Specialist | BSCS Graduate | Freelance Web Solutions | Data Analyst & Business Intelligence
  </p>
</div>


  {/* Right Side: Image with Caption */} 
  <div className="mt-8 md:mt-0 md:w-1/3 flex flex-col items-center"> 
  <img src="/my-portfolio/images/profile.png" 
  alt="Shamsher Ali" className="rounded-full w-48 h-48 border-4 border-white shadow-lg object-cover" /> 
  <p className="mt-4 text-lg font-bold">SHAMSHER ALI</p> 
  </div>

</section>

  );
}
