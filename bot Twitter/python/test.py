import tweepy

def main():
    twitter_auth_keys = {
        "consumer_key"        : "JnEmv9Xcp9qVzHR09bWC7te07",
        "consumer_secret"     : "OcJnh6MLWmjfgjhD7wSEwhT9EuSKmjQs8dg49dn2fqaKvaZyyN",
        "access_token"        : "Ism1EDawEzqdRAEoOLMrBthKWfsLjf0lcyOYrSyAbHTml",
        "access_token_secret" : "1078998061052035072-PxkTSOi2AakKd1yo8blQZD2kYcxFBh"
    }
 
    auth = tweepy.OAuthHandler(
            twitter_auth_keys['consumer_key'],
            twitter_auth_keys['consumer_secret']
            )
    auth.set_access_token(
            twitter_auth_keys['access_token'],
            twitter_auth_keys['access_token_secret']
            )
    api = tweepy.API(auth)
 
    tweet = "Another day, another #scifi #book and a cup of #coffee"
    status = api.update_status(status=tweet)
 
if __name__ == "__main__":
    main()