from textblob import TextBlob

def perform_sentiment_analysis(text):
    # Create a TextBlob object
    blob = TextBlob(text)
    
    # Get the sentiment polarity (-1 to 1)
    sentiment_polarity = blob.sentiment.polarity
    
    return sentiment_polarity

def detect_confirm_shaming(sentiment_score, threshold=0.5):
    # Define a threshold for considering sentiment as potential confirm shaming
    if sentiment_score < threshold:
        return True
    else:
        return False

# Example usage
confirmation_dialogue = "GmailImages Google offered in: हिन्दी বাংলা తెలుగు मराठी தமிழ் ગુજરાતી ಕನ್ನಡ മലയാളം ਪੰਜਾਬੀ India About Advertising Business How Search works Privacy Terms Settings"
sentiment_score = perform_sentiment_analysis(confirmation_dialogue)
li=confirmation_dialogue.split(" ")
for i in li:
    print(perform_sentiment_analysis(i))

print(sentiment_score)
if detect_confirm_shaming(sentiment_score):
    print("Potential confirm shaming detected. Display warning to the user.")
else:
    print("Confirmation dialogue seems fine.")