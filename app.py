# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS  # Import the CORS extension
from textblob import TextBlob

<<<<<<< HEAD

## hi test changes

=======
# hii om
>>>>>>> 36d80385f84d452bf1ab6e9c153504604c1f9705
app = Flask(__name__)
CORS(app)

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

@app.route('/analyze_sentiment', methods=['POST'])
def analyze_sentiment():
    data = request.get_json()
    text = data['text']
    sentiment_score =   perform_sentiment_analysis(text)
    is_confirm_shaming = detect_confirm_shaming(sentiment_score)

    result = {
        'sentiment_score': sentiment_score,
        'is_confirm_shaming': is_confirm_shaming
    }

    return jsonify(result)

if __name__ == '__main__':
    app.run(port=5000)
