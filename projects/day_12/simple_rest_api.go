package main

import (
    "encoding/json"
    "fmt"
    "log"
    "net/http"
    "github.com/gorilla/mux"
)

type Book struct {
    ID     string `json:"id"`
    Title  string `json:"title"`
    Author string `json:"author"`
}

var books []Book

func getBooks(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(books)
}

func createBook(w http.ResponseWriter, r *http.Request) {
    var book Book
    _ = json.NewDecoder(r.Body).Decode(&book)
    books = append(books, book)
    json.NewEncoder(w).Encode(book)
}

func main() {
    books = append(books, Book{ID: "1", Title: "Go Programming", Author: "John Doe"})
    router := mux.NewRouter()
    router.HandleFunc("/books", getBooks).Methods("GET")
    router.HandleFunc("/books", createBook).Methods("POST")
    log.Fatal(http.ListenAndServe(":8000", router))
}

