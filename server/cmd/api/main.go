package main

import (
	"fmt"
	"net/http"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Hello from Go backend")
}

func main() {
	http.HandleFunc("/", helloHandler)
	port := ":8080"
	fmt.Println("Server running on port", port)
	http.ListenAndServe(port, nil)
}
