import React, { useState } from "react";

function EditBook() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    isbn: "",
    genre: "",
    publishedYear: "", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book Edited:", formData);
    alert("Book details edited successfully!");
    setFormData({
      title: "",
      author: "",
      isbn: "",
      genre: "",
      publishedYear: "",
    });
  };

  return (
    <div style={{ maxWidth: "500px", background: "grey", margin: "0 auto", padding: "20px" }}>
      <h2 style={{padding: "20px 0px"}}><b>Edit Book Details</b></h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Title:
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Author:
          </label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            ISBN:
          </label>
          <input
            type="text"
            name="isbn"
            value={formData.isbn}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Genre:
          </label>
          <select
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          >
            <option value="" disabled>
              Select a genre
            </option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Mistery">Mistery</option>
            <option value="History">History</option>
            <option value="Technology">Technology</option>
            <option value="Contemporary Literature">Contemporaray Literature</option>
          </select>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Published Year:
          </label>
          <input
            type="year"
            name="publishedYear"
            value={formData.publishedYear}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div class="space-y-4">
  <div>
    <label for="file" class="block text-sm font-medium mb-1">Upload Book Cover or PDF:</label>
    <div class="flex items-center space-x-2">
      <label class="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <svg class="w-8 h-8 mb-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
          </svg>
          <p class="mb-1 text-sm text-gray-500">
            <span class="font-medium">Click to upload</span> or drag and drop
          </p>
          <p class="text-xs text-gray-500">PNG, JPG, PDF (Max 10MB)</p>
        </div>
        <input
          id="file"
          name="file"
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          class="hidden"
        />
      </label>
    </div>
  </div>
</div>


        <button
          type="submit"
          style={{
            padding: "10px 15px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Edit Book
        </button>
      </form>
    </div>
  );
}

export default EditBook;
