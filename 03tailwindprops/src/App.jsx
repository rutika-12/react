import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    userName: "rutika",
    age: 21,
  };

  return (
    <>
      <div className="isolate bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 px-6 py-24 sm:py-32 lg:px-8 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[72rem] max-w-none -translate-x-1/2 rotate-30 bg-gradient-to-tr from-pink-500 to-indigo-500 opacity-25 sm:left-[calc(50%-40rem)] sm:w-[90rem]"
          />
        </div>

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl drop-shadow-[0_0_25px_rgba(99,102,241,0.35)]">
            Contact Sales
          </h2>
          <p className="mt-3 text-lg text-gray-400">
            Let’s talk about how we can help grow your business.
          </p>
        </div>

        <form className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {[
              { label: "First name", id: "first-name" },
              { label: "Last name", id: "last-name" },
            ].map((item) => (
              <div key={item.id}>
                <label className="block text-sm font-semibold text-white text-left">
                  {item.label}
                </label>
                <input
                  type="text"
                  className="mt-2.5 block w-full rounded-md bg-white/5 px-3.5 py-2 text-white outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-indigo-400 focus:ring-2 focus:ring-indigo-500/40"
                />
              </div>
            ))}

            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-white text-left">
                Email
              </label>
              <input
                type="email"
                className="mt-2.5 block w-full rounded-md bg-white/5 px-3.5 py-2 text-white outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-indigo-400 focus:ring-2 focus:ring-indigo-500/40"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-white text-left">
                Phone number
              </label>
              <div className="mt-2.5 flex rounded-md bg-white/5 outline outline-1 outline-white/10 focus-within:outline-indigo-400 focus-within:ring-2 focus-within:ring-indigo-500/40">
                <div className="relative">
                  <select className="appearance-none bg-transparent py-2 pl-3.5 pr-8 text-gray-400 focus:outline-none">
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                  <ChevronDownIcon className="pointer-events-none absolute right-2 top-2.5 size-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="123-456-7890"
                  className="flex-1 bg-transparent py-2 pl-2 pr-3 text-white placeholder:text-gray-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-semibold text-white text-left">
                Message
              </label>
              <textarea
                rows={4}
                className="mt-2.5 block w-full rounded-md bg-white/5 px-3.5 py-2 text-white outline outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-indigo-400 focus:ring-2 focus:ring-indigo-500/40"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-10 w-full rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-lg hover:scale-[1.02] hover:shadow-indigo-500/30 transition-all duration-300"
          >
            Let’s Talk 🚀
          </button>
        </form>
      </div>

      <div className="bg-gray-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Meet Our Leadership
          </h2>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Leslie Alexander", "CEO"],
              ["Michael Foster", "CTO"],
              ["Lindsay Walton", "Frontend Dev"],
              ["Courtney Henry", "Designer"],
              ["Tom Cook", "Product Head"],
            ].map(([name, role]) => (
              <li
                key={name}
                className="flex items-center gap-4 rounded-xl p-4 hover:bg-white/5 transition"
              >
                <img
                  className="size-14 rounded-full ring-2 ring-indigo-500/30"
                  src="https://i.pravatar.cc/150"
                  alt=""
                />
                <div>
                  <h3 className="font-semibold text-white">{name}</h3>
                  <p className="text-sm text-indigo-400">{role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <br></br>
      <div></div>

      <Card />
    </>
  );
}

export default App;
