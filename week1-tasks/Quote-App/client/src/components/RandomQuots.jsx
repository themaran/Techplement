import { LuCopy } from "react-icons/lu";
import { useState, useEffect } from "react";
const RandomQuots = ({quotes}) => {
    const [index, setIndex] = useState(0);
    const [displayQuote, setDisplayQuote] = useState("");
    const [displayAuthor, setDisplayAuthor] = useState("");
    useEffect(() => {
        // Set a new random index every 24 hours
        const intervalId = setInterval(() => {
          setIndex(Math.floor(Math.random() * quotes.length));
        }, 86400000);
    
        // Clear interval on component unmount
        return () => clearInterval(intervalId);
      }, [quotes]);
    
      useEffect(() => {
        if (quotes.length > 0 && index < quotes.length) {
          setDisplayQuote(quotes[index].quote);
          setDisplayAuthor(quotes[index].author);
        }
      }, [quotes, index]);
        return (
            <div className="w-full h-auto flex items-center flex-col">
                    <p className="text-center font-medium text-4xl my-10 text-gray-800 text-pretty ">Quote of the day...</p>
                <div className=" m-2 w-3/4 p-5 relative bg-white border rounded-lg ">
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
                </div>
            </div>
        )
    }

export default RandomQuots
