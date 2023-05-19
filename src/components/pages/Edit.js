import React from "react";
import Form from "../edit/Form";
import { useGetBookQuery } from "../../features/api/api";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const { data: book, isLoading, isError } = useGetBookQuery(id);
  //decide what to render

  let content = null;

  if (isLoading) {
    content = <p>Loading.....</p>;
  }

  if (!isLoading && isError) {
    content = <p className="error">There was an error editing the book</p>;
  }
  if (!isLoading && !isError && id) {
    content = <Form book={book} />;
  }

  return (
    <main class="py-6 2xl:px-6">
      <div class="container">
        <div class="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 class="mb-8 text-xl font-bold text-center">Edit Book</h4>
          {content}
        </div>
      </div>
    </main>
  );
};

export default Edit;
