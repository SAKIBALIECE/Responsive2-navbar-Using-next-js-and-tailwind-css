 
import Welcome from "@/app/components/welcome/Welcome"; // ✅ Correct import

function Page() { // ✅ Capital P
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbWV8ZW58MHx8MHx8fDA%3D')] h-screen bg-no-repeat bg-cover bg-[#00000099] bg-blend-overlay flex  items-center justify-center"> 
         

       <h1 className="font-extrabold bg-fuchsia-600 p-2 rounded-2xl">My name is sakib</h1>
        
        </div>
  );
}

export default Page;
