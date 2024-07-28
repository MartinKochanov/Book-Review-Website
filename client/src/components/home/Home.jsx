import BooksList from "../booksList/BooksList";
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-800">
      <header className="bg-gray-900 w-full py-6">
        <h1 className="text-3xl font-bold text-white text-center">
          Welcome to the Bookstore
        </h1>
      </header>
      <main className="flex flex-wrap justify-center mt-8">
        <BooksList />
      </main>
    </div>
  );
};

export default Home;
