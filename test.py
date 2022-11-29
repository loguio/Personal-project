import tweepy

def main():
    twitter_auth_keys = {
        "consumer_key"        : "JnEmv9Xcp9qVzHR09bWC7te07",
        "consumer_secret"     : "OcJnh6MLWmjfgjhD7wSEwhT9EuSKmjQs8dg49dn2fqaKvaZyyN",
        "access_token"        : "1078998061052035072-PxkTSOi2AakKd1yo8blQZD2kYcxFBh",
        "access_token_secret" : "Ism1EDawEzqdRAEoOLMrBthKWfsLjf0lcyOYrSyAbHTml "
    }
 
    # auth = tweepy.OAuthHandler(
    #         twitter_auth_keys['consumer_key'],
    #         twitter_auth_keys['consumer_secret']
    #         )
    # auth.set_access_token(
    #         twitter_auth_keys['access_token'],
    #         twitter_auth_keys['access_token_secret']
    #         )
    # api = tweepy.API(auth)
 
    # tweet = "Another day, another #scifi #book and a cup of #coffee"
    # status = api.update_status(status=tweet)
    
    client = tweepy.Client(
    consumer_key=twitter_auth_keys["consumer_key"], consumer_secret=twitter_auth_keys["consumer_secret"],
    access_token=twitter_auth_keys["access_token"], access_token_secret=twitter_auth_keys["access_token_secret"]
    )
    
    response = client.create_tweet(
    text="This Tweet was Tweeted using Tweepy and Twitter API v2!"
    )
    print(f"https://twitter.com/user/status/{response.data['id']}")
 
if __name__ == "__main__":
    main()