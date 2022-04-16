import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
function Home() {
  return (
    <div className="bg-black top-0 absolute w-full">
      {/* Hero section */}
      <div
        className="h-screen  bg-center bg-cover bg-no-repeat flex justify-center items-center p-4 opacity-80 font-serif"
        style={{ backgroundImage: `url(/assets/home_page.png)` }}
      >
        <h1 className="text-4xl font-bold text-white md:text-center">
          Plant a tree,
          <br /> so that the next generation can get free air.
        </h1>
      </div>
      {/* About us */}
      <div className="w-full bg-primary h-fit min-h-[55vh] py-8 flex flex-row justify-center items-center bg-gradient-to-t from-gray-300">
        <div className="grid grid-cols-12 grid-rows-6 w-full h-full max-w-2xl min-h-fit">
          <img
            className="sm:w-10/12 sm:visible drop-shadow-lg sm:rounded-full invisible row-start-1 col-start-1 row-span-4 col-span-4"
            alt="logo"
            src="/assets/Logo.png"
          />
          <h1 className="row-start-1 col-start-2 col-span-full text-lg font-semibold sm:col-start-5">
            About
          </h1>
          <h2 className="row-start-2 col-start-2 col-span-full sm:col-start-5">
            We are helping people to plant more...
          </h2>
          <div className="row-start-3 col-start-2 row-span-3 col-span-3 text-8xl text-black opacity-50 w-full sm:col-start-5 sm:col-span-2 sm:row-span-2 sm:text-7xl">
            <FormatQuoteIcon fontSize="inherit" />
          </div>
          <p className="row-start-3 col-start-5 row-span-full col-span-full sm:col-start-7 text-sm opacity-75">
            X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X
            X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X X
            X
          </p>
        </div>
      </div>
      {/* Gallery */}
      <div
        className="h-screen  bg-center bg-cover bg-no-repeat bg-black flex justify-center items-center"
        style={{ backgroundImage: `url(/assets/leaf-bg.jpg)` }}
      >
        <div className="bg-primary bg-opacity-[0.85] h-[90vh] w-[90vw] flex flex-col sm:grid sm:grid-rows-6 sm:grid-cols-12 gap-4 p-4 md:py-8 lg:px-32">
          <div className="row-start-1 row-span-2 col-start-5 col-span-4 p-4 flex flex-col justify-center items-center">
            <h2 className="font-semibold text-4xl">Our Gallery</h2>
            <p className="text-sm">Take a look at our user's photos</p>
          </div>
          <div className="row-start-2 row-span-2 col-span-4 bg-darkgreen bg-opacity-60 p-8"></div>

          <div className="row-start-4 row-span-3 col-span-4  bg-darkgreen bg-opacity-60 p-8"></div>

          <div className="row-start-2 row-span-2 col-span-4  bg-darkgreen bg-opacity-60 p-8"></div>

          <div className="row-start-3 row-span-full col-start-5 col-span-4  bg-red-400 p-8"></div>

          <div className="row-start-4 row-span-3 col-span-4  bg-darkgreen bg-opacity-60 p-8"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
