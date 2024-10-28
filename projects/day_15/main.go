package main

import (
    "encoding/json"
    "net/http"
)

type Task struct {
    ID   int    `json:"id"`
    Name string `json:"name"`
}

func getTasks(w http.ResponseWriter, r *http.Request) {
    tasks := []Task{
        {ID: 1, Name: "Learn GoLang"},
        {ID: 2, Name: "Build a REST API"},
	{ID: 3, Name: "Follow My GitHub Profile"},
    }
    json.NewEncoder(w).Encode(tasks)
}

func main() {
    http.HandleFunc("/tasks", getTasks)
    http.ListenAndServe(":8081", nil)
}

