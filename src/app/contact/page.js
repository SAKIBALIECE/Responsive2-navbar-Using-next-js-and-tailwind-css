 
import Welcome from "@/app/components/welcome/Welcome"; // ✅ Correct import

function Contact() { // ✅ Capital P
  return (
    <div>
      <Welcome page="Contact" />
    </div>
  );
}

export default Contact;
