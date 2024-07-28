import { FaBook } from "react-icons/fa";
import coverImage from "../../assets/cover.png";

const Home = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center text-gray-100"
      style={{
        backgroundImage: `url(${coverImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header className=" bg-opacity-100 w-full py-6 flex items-center justify-center shadow-lg">
        <FaBook className="text-white mr-3 text-4xl" />
        <h1 className="text-3xl font-bold text-white">
          Welcome to the Bookstore
        </h1>
      </header>
      <main className="flex flex-col items-center mt-8 px-4 w-full">
        <section className="w-full max-w-4xl text-center my-12  bg-opacity-70 p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-md">
          <h2 className="text-4xl font-semibold text-white mb-4">
            Discover Your Next Great Read
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Explore a wide variety of books and find your next favorite.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800">
            Browse Our Collection
          </button>
        </section>
      </main>
    </div>
  );
};

export default Home;
