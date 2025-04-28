import Link from 'next/link';


function Myskill({page}) {
    return (
      <div className="bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbWV8ZW58MHx8MHx8fDA%3D')] h-screen bg-no-repeat bg-cover bg-[#00000099] bg-blend-overlay flex  items-center justify-center"> 
        <h2 className=" text-white md:text-[180px] text-[80px]">{page}</h2> 

         {/* Skills */}
         <div className="flex flex-wrap justify-center gap-4 mb-8">
          <span className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-amber-950">Next.js</span>
          <span className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-amber-950">React</span>
          <span className="px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-cyan-950">TailwindCSS</span>
          <span className="px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-blue-950">JavaScript</span>
          <span className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-amber-900">HTML/CSS</span>

          <Link href=" ./src\app\sakib-cv (1).pdf" download>
          <button className="bg-pink-500 text-white px-3 py-3 flex  rounded-full hover:bg-gray-800 transition duration-300">
            Download CV
          </button>
        </Link>
        </div>

        
         
        
         
        
        </div>
    );
  }
  
  export default Myskill;
  