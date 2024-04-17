package main

import (
	"log"
	"net/http"
	"net/http/httputil"
)

func http_function(w http.ResponseWriter, r *http.Request) {
	res, err := httputil.DumpRequest(r, true)
	if err == nil {
		println(string(res))
	}
}
func main() {
	http.HandleFunc("/", http_function)
	log.Fatal(http.ListenAndServe(":3035", nil))

}
