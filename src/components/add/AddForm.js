import React, { useState } from "react";
import { useAddBookMutation } from "../../features/api/api";

const AddForm = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [featured, setFeatured] = useState(false);

  const [addBook, { isLoading, isError }] = useAddBookMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({
      name,
      author,
      price: Number(price),
      rating: Number(rating),
      featured,
      thumbnail,
    });
  };

  return (
    <form onSubmit={handleSubmit} class="book-form">
      <div class="space-y-2">
        <label for="lws-bookName">Book Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          class="text-input"
          type="text"
          id="lws-bookName"
          name="name"
        />
      </div>

      <div class="space-y-2">
        <label for="lws-author">Author</label>
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          class="text-input"
          type="text"
          id="lws-author"
          name="author"
        />
      </div>

      <div class="space-y-2">
        <label for="lws-thumbnail">Image Url</label>
        <input
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          required
          class="text-input"
          type="text"
          id="lws-thumbnail"
          name="thumbnail"
        />
      </div>

      <div class="grid grid-cols-2 gap-8 pb-4">
        <div class="space-y-2">
          <label for="lws-price">Price</label>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            class="text-input"
            type="number"
            id="lws-price"
            name="price"
          />
        </div>

        <div class="space-y-2">
          <label for="lws-rating">Rating</label>
          <input
            onChange={(e) => setRating(e.target.value)}
            value={rating}
            required
            class="text-input"
            type="number"
            id="lws-rating"
            name="rating"
            min="1"
            max="5"
          />
        </div>
      </div>

      <div class="flex items-center">
        <input
          onChange={() => setFeatured(!featured)}
          value={featured}
          id="lws-featured"
          type="checkbox"
          name="featured"
          class="w-4 h-4"
        />
        <label for="lws-featured" class="ml-2 text-sm">
          This is a featured book
        </label>
      </div>

      <button disabled={isLoading} type="submit" class="submit" id="lws-submit">
        Add Book
      </button>
      {isError && <p className="error">An error adding book</p>}
    </form>
  );
};

export default AddForm;
