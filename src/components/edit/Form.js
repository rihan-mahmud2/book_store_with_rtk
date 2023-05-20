import React, { useState } from "react";
import { useEditBookMutation } from "../../features/api/api";

const Form = ({ book }) => {
  const {
    id,
    name: editingName,
    author: editingAuthor,
    thumbnail: editingThumbnail,
    price: editingPrice,
    featured: editingFeatured,
    rating: editingRating,
  } = book || {};

  const [name, setName] = useState(editingName);
  const [author, setAuthor] = useState(editingAuthor);
  const [thumbnail, setThumbnail] = useState(editingThumbnail);
  const [price, setPrice] = useState(editingPrice);
  const [rating, setRating] = useState(editingRating);
  const [featured, setFeatured] = useState(editingFeatured);

  const [editBook, { isLoading, isError }] = useEditBookMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    editBook({
      id,
      data: {
        name,
        author,
        price: Number(price),
        rating: Number(rating),
        featured,
        thumbnail,
      },
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
          checked={featured}
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
        Edit Book
      </button>
      {isError && <p className="error">An error editing book</p>}
    </form>
  );
};

export default Form;
