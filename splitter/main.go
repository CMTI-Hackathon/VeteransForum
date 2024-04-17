package main

import (
	"log"
	"net/http"
)

func http_function(w http.ResponseWriter, r *http.Request) {
	println(r.Host)
}
func main() {
	http.HandleFunc("/", http_function)
	log.Fatal(http.ListenAndServe(":3035", nil))

}
