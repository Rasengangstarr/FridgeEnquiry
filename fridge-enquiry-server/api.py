from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)

database = open("data.json")

foodItems = json.load(database)["foodItems"]


@app.route('/barcode', methods=["GET"])
@cross_origin()
def getBarcode():
    content = request.args.get("number");
    for f in foodItems:
        if f["barcode"] == content:
            print("found"+f["name"])
            return str(f["name"])
    print ("not found")
    return str("barcode not recognized");

app.run(host="0.0.0.0", ssl_context='adhoc')