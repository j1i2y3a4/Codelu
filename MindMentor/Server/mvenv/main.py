from flask import Flask,jsonify,request
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
#Configuring MongoDB Details

MongoDB_URL= "mongodb+srv://jiyarosejoshy:unnimanga>@cluster0.ydvehnw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
# client = MongoClient("mongodb://localhost:27017")
client = MongoClient(MongoDB_URL)
db =  client['Login']
collection = db['Users']

@app.route('/',methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"error": "Email and password are required"}),400
    
    user = collection.find_one({"email" : email})

    if user and user['password'] == password:
       
        return jsonify({"message": "Login succesfull"}),200
    else : 
        return jsonify({"error": "Invalid email or password"}),401             

if __name__ == "__main__" :
    app.run(debug=True)