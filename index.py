#!usr/bin/python3

from flask import Flask, render_template,request, Response, jsonify
from flask_restplus import Api, Resource , fields, Namespace
from bottle import HTTPResponse
from flask_cors import CORS
from flask_api import status
#import logging
#import json, os, time, decimal, re, subprocess,random,string
import json

app = Flask(__name__)
CORS(app)
api = Api(app)


@api.response(404, 'database not found.')
@api.response(400, 'Invalid inputs.')

# size of data
def sizeOfList():
    with open('data.json') as f:
      data = json.load(f)

    return len(data)

#add sample to json file here
def addBloodSample(name, contact, bld_grp, bld_type, usebydate, arrival, pathology):
    newInput ={}
    data = {}
    data['name'] = ""+name
    data['contact'] = ""+contact
    data['blood_group'] = ""+bld_grp
    data['blood_type'] = ""+bld_type
    data['use_by_date'] = ""+usebydate
    data['arrival_date'] = ""+arrival
    data['pathology'] = ""+pathology

    newInput['id'] = (sizeOfList() + 1)
    newInput['data'] = data

    with open('data.json', mode='r') as data:
        feeds = json.load(data)
    with open('data.json', mode='w') as data:
        feeds.append(newInput)
        json.dump(feeds, data)


# delete the blood sample
def deleteBloodSample(id):
    with open('data.json', mode='r') as data:
        feeds = json.load(data)

    for e in feeds:
        if (e['id'] == id):
            print(e)
            feeds.remove(e)

    with open('data.json', 'w') as data:
        feeds = json.dump(feeds, data)


# read json file
def readJson():
    with open('data.json') as f:
        data = json.load(f)

    # make it return json object for other methods to use
    d = json.dumps(data, indent=4)
    print(d)
    return d
    # size = sizeOfList()
    # print(size)


#log = logging.getLogger(__name__)
ns = api.namespace('vampire', description='Returns the blood sample data')
@api.route('/show', methods=['GET'])

class show(Resource):
    @api.response(200, 'has data')
    def get(self):
        result = readJson()
        return result , status.HTTP_200_OK

# sort by Quantity
# def sortListByQuantity(ArrayList<int> samples):
#     return samples.sort(reverse = true)

# sort by blood group
# def sortListByGroup(ArrayList<Char> samples):
#     return samples.sort();





# for sorting attributes of sample
# json_obj = {
#   "text": "hello world",
#   "predictions":
#    [
#      {"class": "Class 1", "percentage": 4.63},
#      {"class": "Class 2", "percentage": 74.68},
#      {"class": "Class 3", "percentage": 9.38},
#      {"class": "Class 4", "percentage": 5.78},
#      {"class": "Class 5", "percentage": 5.53}
#    ]
# }
#
# sorted_obj = dict(json_obj)
# sorted_obj['predictions'] = sorted(json_obj['predictions'], key=lambda x : x['percentage'], reverse=True)


# try...except to handle the KeyError, then use this as the key argument
# def extract_time(json):
#     try:
#         return int(json['page']['update_time'])
#     except KeyError:
#         return 0
#
# # lines.sort() is more efficient than lines = lines.sorted()
# lines.sort(key=extract_time, reverse=True)




# @bookings.route( '/get_customer', methods=[ 'POST' ] )
# @app.route('/', methods=[ 'POST' ] )
# def index():
#   return render_template('template.html')


#
# HTML for flask
#
#  <!doctype html>
# <title>Test</title>
# <meta charset=utf-8>
#
# <a href="/my-link/">Click me</a>





if __name__ == '__main__':
  app.run(debug=True)
