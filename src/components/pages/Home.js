import React from "react";
import Header from "../Books/Header";
import Book from "../Books/Book";
import Books from "../Books/Books";

const Home = () => {
  return (
    <main class="py-12 px-6 2xl:px-6 container">
      <div class="order-2 xl:-order-1">
        <Header />

        <Books>
          <Book />
        </Books>
      </div>
    </main>
  );
};

export default Home;
