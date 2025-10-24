// export default function NewsletterHeader() {
//   return (
//     <section className="text-center py-[6rem]">
//       <h2 className="text-3xl font-semibold mb-2">Our Monthly Newsletter</h2>
//       <p className="text-gray-600 mb-4">
//         For news updates concerning our recent operations, please enter your email to subscribe.
//       </p>
//       <form className="flex justify-center items-center gap-2 max-w-md mx-auto">
//         <input
//           type="email"
//           placeholder="Enter your email"
//           className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
//           Subscribe
//         </button>
//       </form>
//     </section>
//   );
// }

import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // success | error | null

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return setStatus("Please enter a valid email.");

    try {
      const res = await fetch( {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("Subscribed successfully! 🎉");
        setEmail("");
      } else {
        setStatus("Subscription failed. Try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="bg-gray-50 py-[6rem] text-center">
      <h2 className="text-2xl font-semibold mb-4">Our Monthly Newsletter</h2>
      <p className="text-gray-600 mb-6">
        For more updates concerning our modus operandum, please, enter your email to
subscribe to our newsletter below.
      </p>

      <form
        onSubmit={handleSubscribe}
        className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-lg mx-auto"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full sm:w-auto flex-1 px-4 py-2 border rounded-lg focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Subscribe
        </button>
      </form>

      {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
    </section>
  );
}

export default Newsletter;

