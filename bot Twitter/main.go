package main

import (
	"fmt"
	"log"

	"github.com/dghubble/go-twitter/twitter"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/clientcredentials"
)

type Credentials struct {
	ConsumerKey       string
	ConsumerSecret    string
	AccessToken       string
	AccessTokenSecret string
}

func main() {
	fmt.Println("Go-Twitter Bot v0.01")

	creds := Credentials{
		AccessToken:       "1078998061052035072-PxkTSOi2AakKd1yo8blQZD2kYcxFBh",
		AccessTokenSecret: "Ism1EDawEzqdRAEoOLMrBthKWfsLjf0lcyOYrSyAbHTml",
		ConsumerKey:       "JnEmv9Xcp9qVzHR09bWC7te07",
		ConsumerSecret:    "OcJnh6MLWmjfgjhD7wSEwhT9EuSKmjQs8dg49dn2fqaKvaZyyN",
	}

	client, err := getClient(&creds)
	if err != nil {
		log.Println("Error getting Twitter Client")
		log.Println(err)
	}

	// Print out the pointer to our client
	// for now so it doesn't throw errors

	fmt.Printf("%+v\n", client.Users)

	tweet, resp, err := client.Statuses.Update("A Test Tweet from a new Bot I'm building!", nil)
	if err != nil {
		log.Println(err.Error())
	}
	log.Printf("%+v\n", resp)
	log.Printf("%+v\n", tweet)

}

func getClient(creds *Credentials) (*twitter.Client, error) {
	// Pass in your consumer key (API Key) and your Consumer Secret (API Secret)

	// config := oauth1.NewConfig(creds.ConsumerKey, creds.ConsumerSecret)
	// // Pass in your Access Token and your Access Token Secret
	// token := oauth1.NewToken(creds.AccessToken, creds.AccessTokenSecret)
	// httpClient := config.Client(oauth1.NoContext, token)
	// client := twitter.NewClient(httpClient)

	// // Verify Credentials
	// verifyParams := &twitter.AccountVerifyParams{
	// 	SkipStatus:   twitter.Bool(true),
	// 	IncludeEmail: twitter.Bool(true),
	// }

	// // we can retrieve the user and verify if the credentials
	// // we have used successfully allow us to log in!
	// user, _, err := client.Accounts.VerifyCredentials(verifyParams)
	// if err != nil {
	// 	return nil, err
	// }

	// log.Printf("User's ACCOUNT:\n%+v\n", user)

	////////////////////////////////////////////////////////////////////////////////////////////////////////////

	config := &clientcredentials.Config{
		ClientID:     "eWdvWUg0MUl3UTRaRE9LRDZSYWc6MTpjaQ",
		ClientSecret: "w34xze9OBSL6Wn5I5BUBmz5YADCfG9NwXtFARGdeinl0ZMxKNO",
		TokenURL:     "https://localhost:3000/",
	}
	// http.Client will automatically authorize Requests
	httpClient := config.Client(oauth2.NoContext)

	// Twitter client
	client := twitter.NewClient(httpClient)
	return client, nil
}
