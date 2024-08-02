
import { useState, useEffect } from "react";
import { ImSearch } from "react-icons/im";
// import { LuCopy } from "react-icons/lu";
import RandomQuots from "./components/RandomQuots";
const App = () => {
  const [quotes, setQuotes] = useState([]);
  // const [index, setIndex] = useState(0);
  useEffect(() => {
    fetch("http://localhost:3000/quotes")
      .then((response) => response.json())
      .then((quotes) => {
        setQuotes(quotes);
      });
  }, []);

  // useEffect(() => {
  //   // Set a new random index every 24 hours
  //   const intervalId = setInterval(() => {
  //     setIndex(Math.floor(Math.random() * quotes.length));
  //   }, 86400000);

  //   // Clear interval on component unmount
  //   return () => clearInterval(intervalId);
  // }, [quotes]);

  // useEffect(() => {
  //   if (quotes.length > 0 && index < quotes.length) {
  //     setDisplayQuote(quotes[index].quote);
  //     setDisplayAuthor(quotes[index].author);
  //   }
  // }, [quotes, index]);

  return (
    <section className="w-full h-screen flex flex-col gap-2 items-center ">

      {/* <div className=" m-2 w-3/4 p-5 relative bg-white border rounded-lg ">
        {quotes.length > 0 ? (
          <>
            <p className="text-sm font-medium text-center italic text-balance text-[#374151]">
              &quot;{displayQuote}&quot;
            </p>
            <p className=" text-sm font-light text-end italic text-[#374151]">
              -{displayAuthor}
            </p>
          </>
        ) : (
          <p>Loading...</p>
        )}
        <button
          className="absolute -top-5 -right-5 bg-white p-2 rounded-md shadow-xl  hover:scale-125 transition duration-300  ease-in-out touch-pinch-zoom  "
          onClick={() =>
            navigator.clipboard.writeText(
              `"${displayQuote}" - ${displayAuthor}`
            )
          }
        >
          <LuCopy size={20} color="#374151" />
        </button>
      </div> */}
      <RandomQuots quotes={quotes}/>
      <div className="flex gap-4  border p-2 rounded-full h-auto w-auto items-center justify-center hover:scale-105 transition duration-300 ease-in-out">
        <input
          className="w-80 outline-none p-2  rounded-full  placeholder:font-light touch-pinch-zoom"
          type="text"
          placeholder="Search by the author..."
        />
        <button className="p-2 rounded-full  hover:shadow-lg hover:scale-105 transition duration-300  ease-in-out touch-pinch-zoom">
          <ImSearch
            className="transition duration-300 hover:rotate-12 ease-in-out"
            color="#374151"
            size={20}
          />
        </button>
      </div>
    </section>
  );
};

export default App;
