import React, { useState } from 'react';

const AddBook = () => {
  const [formData, setState] = useState({
    title: '',
    author: '',
    isbn: '',
    category: '',
    publishedDate: '',
    file: null
  });
  
  const [fileName, setFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user updates a field
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };
  
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setFileName(file.name);
      setState(prev => ({
        ...prev,
        file: file
      }));
      
      // Clear file error if it exists
      if (formErrors.file) {
        setFormErrors(prev => ({
          ...prev,
          file: null
        }));
      }
    }
  };
  
  const validateForm = () => {
    const errors = {};
    if (!formData.title) errors.title = "Title is required";
    if (!formData.author) errors.author = "Author is required";
    if (!formData.isbn) errors.isbn = "ISBN is required";
    if (!formData.category) errors.category = "Please select a category";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted with data:", formData);
      setIsSubmitting(false);
      // Reset form after successful submission
      setState({
        title: '',
        author: '',
        isbn: '',
        category: '',
        publishedDate: '',
        file: null
      });
      setFileName('');
      alert("Book added successfully!");
    }, 1000);
  };
  
  return (
    <div className="max-w-2xl mx-auto p-4 bg-blue-300 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Add New Book</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Title:
          </label>
          <input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${formErrors.title ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter book title"
          />
          {formErrors.title && (
            <p className="text-red-500 text-xs mt-1">{formErrors.title}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="author" className="block text-sm font-medium mb-1">
            Author:
          </label>
          <input
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${formErrors.author ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter author name"
          />
          {formErrors.author && (
            <p className="text-red-500 text-xs mt-1">{formErrors.author}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="isbn" className="block text-sm font-medium mb-1">
            ISBN:
          </label>
          <input
            id="isbn"
            name="isbn"
            value={formData.isbn}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md ${formErrors.isbn ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter ISBN number"
          />
          {formErrors.isbn && (
            <p className="text-red-500 text-xs mt-1">{formErrors.isbn}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="category" className="block text-sm font-medium mb-1">
            Category:
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md bg-white ${formErrors.category ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="">Select a category</option>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fiction</option>
            <option value="mystery">Mystery</option>
            <option value="history">History</option>
            <option value="technology">Technology</option>
            <option value="contemporary literature">Contemporary Literature</option>

          </select>
          {formErrors.category && (
            <p className="text-red-500 text-xs mt-1">{formErrors.category}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="publishedDate" className="block text-sm font-medium mb-1">
            Published Date:
          </label>
          <input
            id="publishedDate"
            name="publishedDate"
            type="date"
            value={formData.publishedDate}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        
        <div>
          <label htmlFor="file" className="block text-sm font-medium mb-1">
            Upload Book Cover or PDF:
          </label>
          <div className="flex items-center space-x-2">
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                </svg>
                <p className="mb-1 text-sm text-gray-500">
                  <span className="font-medium">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">PNG, JPG, PDF (Max 10MB)</p>
                {fileName && (
                  <p className="text-xs text-blue-500 mt-2 font-medium">Selected: {fileName}</p>
                )}
              </div>
              <input
                id="file"
                name="file"
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
        </div>
        
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center items-center py-2 px-4 bg-blue-800 hover:bg-blue-700 text-white font-medium rounded-md disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors duration-300"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Adding...
              </>
            ) : (
              "Add Book"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;