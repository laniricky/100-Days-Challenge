package main

import (
    "fmt"
    "net/http"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello Go Developer, The Challenge to 100 Continues!")
}

func main() {
    http.HandleFunc("/", helloHandler)
    fmt.Println("Server starting on port 8080...")
    http.ListenAndServe(":8080", nil)
}

