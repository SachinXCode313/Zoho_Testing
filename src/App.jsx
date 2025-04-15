import { useEffect, useState } from "react";

function App() {
  // Separate states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Load Zoho widget
  useEffect(() => {
    window.$zoho = window.$zoho || {};
    window.$zoho.salesiq = window.$zoho.salesiq || {
      ready: function () {
        const userData = JSON.parse(localStorage.getItem("User Data") || "{}");

        if (userData.name) {
          window.$zoho.salesiq.visitor.name(userData.name);
        }
        if (userData.email) {
          window.$zoho.salesiq.visitor.email(userData.email);
        }
        if (userData.phone) {
          window.$zoho.salesiq.visitor.contactnumber(userData.phone);
        }
      }
    }

    const script = document.createElement("script");
    script.id = "zsiqscript";
    script.src =
      "https://salesiq.zohopublic.in/widget?wc=siq8f44a25f398214d730aca41b275915505efce361876a2b7276b2d134d2def1fe";
    script.defer = true;
    
    document.body.appendChild(script);
  }, []);

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      phone: phone,
    };

    localStorage.setItem("User Data", JSON.stringify(formData));
    console.log("local data : ", localStorage.getItem("User Data"))
    // Use this data to call API or anything else
  };

  return (
    <div className="flex justify-center items-center h-[100vh] bg-gray-100">
      <div className="w-[350px] p-6 bg-white rounded-lg shadow-lg relative font-sans">
        <h2 className="text-xl font-semibold text-purple-800">Get in Touch</h2>
        <p className="text-sm text-gray-500 mb-4">We'd love to hear from you!</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <span className="flex items-center px-2 bg-white border-r border-gray-300">
                +91
              </span>
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number"
                className="w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-gray-500 text-white py-2 rounded-md font-medium hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
