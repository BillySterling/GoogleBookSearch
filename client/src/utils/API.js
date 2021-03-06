import axios from "axios";

const GoogleAPI = "https://www.googleapis.com/books/v1/volumes?q=";
const resultSet = "&maxResults=5";

// Export an object with a "search" method that searches the google books API for the passed query
export default {
  search: function(query) {
    return axios.get(GoogleAPI + query + resultSet);
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
