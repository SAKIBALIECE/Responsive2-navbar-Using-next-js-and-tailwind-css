 
import Welcome from "@/app/components/welcome/Welcome"; // ✅ Correct import

function Page() { // ✅ Capital P
  return (
    <div>
      <Welcome page="about" />
    </div>
  );
}

export default Page;
