import React from "react";
import Book from "./Book";
import { useGetBooksQuery } from "../../features/api/api";

const Books = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery();

  let content = null;

  if (isLoading) {
    content = <p>The video is loading......</p>;
  }

  if (!isLoading && isError) {
    content = <p className="error">There was a error occured</p>;
  }

  if (!isLoading && !isError && books?.length === 0) {
    content = <p>No video found</p>;
  }
  if (!isLoading && !isError && books?.length > 0) {
    content = books.map((book) => <Book book={book} key={book.id} />);
  }
  console.log(books, !isLoading, !isError, books?.length > 0);

  return (
    <div class="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
      {content}
    </div>
  );
};

export default Books;
