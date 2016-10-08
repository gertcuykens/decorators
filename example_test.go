package main

import (
	"log"
	"net/http"
	"testing"
)

func TestMain(m *testing.M) {
	err := http.ListenAndServe(":8080", http.FileServer(http.Dir("./")))
	if err != nil {
		log.Fatalln(err.Error())
	}
}
