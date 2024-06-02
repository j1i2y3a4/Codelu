# from flask import Flask,jsonify,request
# from pymongo import MongoClient
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)
# #Configuring MongoDB Details

# #MongoDB_URL= "mongodb+srv://jiyarosejoshy:unnimanga@cluster0.ydvehnw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
# client = MongoClient("mongodb://localhost:27017")
# #client = MongoClient(MongoDB_URL)
# db =  client['Login']
# collection = db['Users']

# @app.route('/',methods=['POST'])
# def login():
#     data = request.get_json()
#     email = data.get('username')
#     password = data.get('password')

#     if not email or not password:
#         return jsonify({"success": False, "message": "Email and password are required"}), 400
    
#     user = collection.find_one({"email" : email})

#     if user and user['password'] == password:
       
#         return jsonify({"success": True, "message": "Login successful"}), 200
#     else : 
#          return jsonify({"success": False, "message": "Invalid email or password"}), 401
# if __name__ == "__main__" :
#     app.run(debug=True,port="3000")

from flask import Flask, jsonify, request
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Configure MongoDB Details
# Replace with your MongoDB connection details or use environment variables
# MongoDB_URL = "mongodb://localhost:27017"
client = MongoClient("mongodb://localhost:27017")
db = client['Login']
collection = db['Users']

@app.route('/', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('username')
    password = data.get('password')

    if not email or not password:
        return jsonify({"success": False, "message": "Email and password are required"}), 400

    user = collection.find_one({"email": email})

    if user and user['password'] == password:  # Note: This is storing and comparing plain text passwords
        return jsonify({"success": True, "message": "Login successful"}), 200
    else:
        return jsonify({"success": False, "message": "Invalid email or password"}), 401

if __name__ == "__main__":
    app.run(debug=True, port=3000)
