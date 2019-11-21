#!usr/bin/python3

from flask import Flask, render_template,request, Response, jsonify
from flask_api import status
from flask_restplus import Api, Resource , fields, Namespace
from bottle import HTTPResponse
from flask_cors import CORS
from datetime import datetime

import json
import time
import datetime
from datetime import date
import collections
import re

app = Flask(__name__)
CORS(app)
api = Api(app)


@api.response(404, 'database not found.')
@api.response(400, 'Invalid inputs.')

# size of data
def sizeOfList():
    with open('data.json') as f:
      data = json.load(f)

    return len(data['database'])

# read json file
def readJson():
    with open('data.json') as f:
        data = json.load(f)

    # make it return json object for other methods to use
    #d = JSON.parse(data)
    d = json.dumps(data)
    return d
    # size = sizeOfList()
    # print(size)


#log = logging.getLogger(__name__)



# REQT2 - DEPOSITS

#add sample to json file here
def addBloodSample(name, contact, bld_grp, bld_type, usebydate, arrival, pathology):
    newInput ={}
    #data = {}
    newInput['id'] = (sizeOfList() + 1)
    newInput['name'] = ""+name
    newInput['contact'] = ""+contact
    newInput['blood_group'] = ""+bld_grp
    newInput['blood_type'] = ""+bld_type
    newInput['use_by_date'] = ""+usebydate
    newInput['arrival_date'] = ""+arrival
    newInput['pathology'] = ""+pathology

    with open('data.json', mode='r') as data:
        feeds = json.load(data)

    with open('data.json', mode='w') as data:
        feeds['database'].append(newInput)
        json.dump(feeds, data)



# REQT 3 - QUERIES

#Check if donor exists in list
def check_existing_donor(data, contact):

    exists = 'false'
    for i in range (0, len(data)):
        if (data[i]['contact'] == contact):
            exists = 'true'

    return exists

# List of donors

def list_donors():

    database = {}
    donors = []

    with open('data.json') as f:
      data = json.load(f)

    for i in range (0, len(data['database'])):
    #for key, value in data[i].items():
        newInput = {}
        newInput['name'] = data['database'][i]['name']
        newInput['contact'] = data['database'][i]['contact']
        newInput['blood_group'] = data['database'][i]['blood_group']

        # Make sure donors aren't listed twice
        x = json.dumps(donors, indent=4)
        donor_data = json.loads(x)
        if (check_existing_donor(donor_data, data['database'][i]['contact']) == 'false'):
            donors.append(newInput)

    database['database'] = donors
    return (json.dumps(database, indent=4))



#Check if donor exists in list
def check_existing_donor(data, contact):

    exists = 'false'
    for i in range (0, len(data)):
        if (data[i]['contact'] == contact):
            exists = 'true'

    return exists

s = list_donors()
data1 = json.loads(s)
#print(json.dumps(data1, indent=4))



# class show(Resource):
#     @api.response(200, 'has data')
#     def get(self):
#         result = readJson()
#
#         return result , status.HTTP_200_OK

# bubble sort by exp date
def sort_by_date(data):
    #jsonobject = {database:[]}
    jsonobject = {}
    sortedList = sorted(data['database'], key = lambda  x: datetime.datetime.strptime(x['use_by_date'], '%d/%m/%Y'))
    jsonobject['database'] = sortedList;
    return jsonobject;

# with open('data.json', mode='r') as data:
#     d = json.load(data)
#     s = sort_by_date(d)

#print(json.dumps(data1, indent=4))



def filterByGroup(data, bgroup) :

    database = {}
    new = []

    for i in range (0, len(data)):
        for key, value in data[i].items():

            if (key == "blood_group" and value == bgroup):
                new.append(data[i])

    database['database'] = new
    return (json.dumps(database, indent=4))

def searchGroup(data, bgroup) :

    database = {}
    result = []
    bgroup = "^"+ bgroup

    for i in range (0, len(data) - 1):

        #check = 0;
        for key, value in data[i].items():
            value = str(value).lower()
            x = re.search(bgroup,value, re.IGNORECASE)
            #y = re.search(btype, value)

            if (key == "blood_group" and x):
                #j= j +1
                result.append(data[i])

    database['database'] = result
    return (json.dumps(database, indent=4))

def searchType (data, btype) :

    database = {}
    result = []
    #btype = btype.lower()

    for i in range (0, len(data) -1 ):

        check = 0;
        for key, value in data[i].items():

            value = str(value)

            y = re.search(btype, value, re.IGNORECASE)
            if (key == "blood_type" and y):
                result.append(data[i])

    database['database'] = result
    return (json.dumps(database, indent=4))


with open('data.json', mode='r') as data:
   feeds = json.load(data)

#sorted_data = sort_by_date(feeds)

#print(json.dumps(sorted_data, indent=4))

#filtered_data = filterByGroup (feeds['database'], "B")
#data1 = json.loads(filtered_data)
#print (json.dumps(data1, indent=4))

#searched = searchGroup(feeds['database'], "B")
#data1 = json.loads(searched)


searched = searchGroup(feeds, "B")
#print (json.dumps(searched, indent = 4))


typeSearch = searchType(feeds['database'], "General")
data1 = json.loads(typeSearch)
#print (json.dumps(data1, indent = 4))

#sort by exp date
#    sorted_by_date = sorted(feeds, key=lambda x: datetime.strptime(x['data']['use_by_date'], '%d/%m/%y'))
#    print(json.dumps(sorted_by_date, indent=4))



# Counts the quantity of a blood group

def count_quantity(blood_group, blood_type):

    quantity = 0
    #i = 0
    with open('data.json', mode='r') as data:
        d = json.load(data)

    for i in range (0, len(d['database'])):
        v = d['database'][i]
        grp = v['blood_group']
        tye = v['blood_type']
        if (grp == blood_group and tye == blood_type):
            quantity = quantity +1
            
        #for key, value in d['database'][i].items():
            #if(key == "blood_group" and value == blood_group):
                # if(key == "blood_type" and value == blood_group):
            #quantity = quantity +1

    return quantity

# Arrange the blood groups to their corresponding quantities

def blood_group_quantities():

    blood_group_quantities = []

    A = {}
    B = {}
    AB = {}
    O = {}

    a1types = {}
    b1types = {}
    ab1types = {}
    o1types = {}
    a2types = {}
    b2types = {}
    ab2types = {}
    o2types = {}

    a1types['group'] = "A"
    a1types['type'] = "RARE"
    a1types['quantity'] = count_quantity("A", "RARE")

    a2types['group'] = "A"
    a2types['type'] = "GENERAL"
    a2types['quantity'] = count_quantity("A", "GENERAL")


    b1types['group'] = "B"
    b1types['type'] = "RARE"
    b1types['quantity'] = count_quantity("B", "RARE")

    b2types['group'] = "B"
    b2types['type'] = "GENERAL"
    b2types['quantity'] = count_quantity("B", "GENERAL")

    ab1types['group'] = "AB"
    ab1types['type'] = "RARE"
    ab1types['quantity'] = count_quantity("AB", "RARE")

    ab2types['group'] = "AB"
    ab2types['type'] = "GENERAL"
    ab2types['quantity'] = count_quantity("AB", "GENERAL")

    o1types['group'] = "O"
    o1types['type'] = "RARE"
    o1types['quantity'] = count_quantity("O", "RARE")

    o2types['group'] = "O"
    o2types['type'] = "GENERAL"
    o2types['quantity'] = count_quantity("O", "GENERAL")


    blood_group_quantities.append(a1types)
    blood_group_quantities.append(a2types)
    blood_group_quantities.append(b1types)
    blood_group_quantities.append(b2types)
    blood_group_quantities.append(ab1types)
    blood_group_quantities.append(ab2types)
    blood_group_quantities.append(o1types)
    blood_group_quantities.append(o2types)

    return (blood_group_quantities)

# Sort data by blood group from lowest quantity to highest quantity

def sort_blood_group_by_quantity(data):
    database = {}
    result = []
    ordered_quantity = blood_group_quantities()
    for i in range (0, len(ordered_quantity) - 1):
        for j in range (0 , len(ordered_quantity) - 1 - i):
            for key, value in ordered_quantity[j].items():
                    x = value
            for key, value in ordered_quantity[j + 1].items():
                    y = value
            if (x > y):
                ordered_quantity[j], ordered_quantity[j + 1] = ordered_quantity[j + 1], ordered_quantity[j]

    for item in ordered_quantity:
        for blood_group in item:
            for i in range (0, len(data)):
                for key, value in data[i].items():
                    if(key == 'blood_group' and value == blood_group):
                        result.append(data[i])

    database['database'] = result

    return database
    #return (json.dumps(database, indent=4))

# with open('data.json', mode='r') as data:
#     d = json.load(data)
#
# s = sort_blood_group_by_quantity(d['database'])
# data1 = json.loads(s)
#print(json.dumps(data1, indent=4))

# RQT 4 - REQUESTS

# requests for blood supplies by blood group, quantity

def blood_requests(blood_group, blood_type, requested_quantity):

    check = None
    if (blood_group == 'A' or blood_group == 'B' or blood_group == 'AB' or blood_group == 'O'):
            quantity = count_quantity(blood_group, blood_type)
            if (requested_quantity > quantity):
                message = "Not enough supplies"
                check = False

            else:
                message = "ORDER CONFIRMED: " + str(requested_quantity) + " blood samples of blood group: " + blood_group + " type: "+blood_type
                check = True
    else:
        message = "Please enter a valid blood group"
        check = False

    # delete blood from sample
    with open('data.json', mode='r') as data:
        feeds = json.load(data)

    if (check == True):
        i = 0

        newFeeds = sort_by_date(feeds)

        # while i <= requested_quantity :

        for e in newFeeds['database'] :
            #print(e)
            if (e['blood_group'] == blood_group and e['blood_type'] == blood_type):
                #print("found")
                id = e['id']
                #print(id)
                deleteBloodSample(id)
                i = i + 1
                if (i == requested_quantity):
                    print(i)
                    return message

    return message


# RQT 5  - WITHDRAWS

# delete the blood sample
def deleteBloodSample(id):

    with open('data.json', mode='r') as data:
        feeds = json.load(data)

    for e in feeds['database']:
        if (e['id'] == int(id)):
            print("here")
            feeds['database'].remove(e)

    with open('data.json', 'w') as data:
        feeds = json.dump(feeds, data)

#print(blood_requests('O', 1))

# RQT 6  - DELIVERS

# Check if blood has passed by expiry date

def check_if_expired(ID):

    with open('data.json') as f:
      data = json.load(f)


    # get timestamp of today's date
    today = date.today()
    date_today = today.strftime("%d/%m/%y")
    date_today_timestamp = time.mktime(datetime.datetime.strptime(date_today, "%d/%m/%y").timetuple())

    # get timestamp of blood expiry date
    for i in range (0, len(data['database'])):
        for key, value in data['database'][i].items():
            if (key == "id" and value == ID):
                exp_date = data['database'][i]['use_by_date']
                exp_date_timestamp = time.mktime(datetime.datetime.strptime(exp_date, "%d/%m/%y").timetuple())

    # compare
    if (exp_date_timestamp < date_today_timestamp):
        return "expired"
    else:
        return "clear"


#print(check_if_expired(6))

# delete if expired
def remove_if_expired():

    with open('data.json') as f:
      data = json.load(f)

    for i in range (0, len(data['database'])):
        for key, value in data['database'][i].items():
            if (key == "id"):
                if (check_if_expired(value) == 'expired'):
                    deleteBloodSample(value)




# def hospital_view():


#remove_if_expired()



# #sort by Quantity
# def sortListByQuantity(ArrayList<int> samples):
#     return samples.sort(reverse = true)
#
#
# #sort by blood group
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


#fetch('https://mywebsite.com/endpoint/', {
#  method: 'POST',
#  headers: {
#    'Accept': 'application/json',
#    'Content-Type': 'application/json',
#  },
#  body: JSON.stringify({
#    firstParam: 'yourValue',
#    secondParam: 'yourOtherValue',
#  })
#})
def make_string(words):
    if words != None:
        s = ""
        for i in words:
            s = s+ i
        return s

ns = api.namespace('vampire', description='Returns the blood sample data')
@api.route('/show', methods=['GET', 'POST'])
@api.doc(params={'sort': 'example: sort = quantity/ date'})
@api.doc(params={'delete': 'example: delete = 1'})
@api.doc(params={'deleteGrp': 'example: delete = A'})
@api.doc(params={'deleteType': 'example: delete = RARE'})
@api.doc(params={'deleteQuantity': 'example: delete = 5'})

class show(Resource):
    @api.response(200, 'Success')
    def get(self):
        if request.method == 'GET':
            result = readJson();

            #for sorting the vampire view
            sortKind = request.args.get('sort')
            if (sortKind != None):
                sortKindString = make_string(sortKind);
                if (sortKindString == "date"):
                    temps = json.loads(result);
                    sortd = sort_by_date(temps);
                    return sortd , status.HTTP_200_OK

                if (sortKindString == "quantity"):
                    tempq = json.loads(result);
                    sortq = sort_blood_group_by_quantity(tempq['database']);
                    return sortq , status.HTTP_200_OK

            #for hospital view
            checkHospital = request.args.get('hospital');
            if (checkHospital != None):
                if (checkHospital == "1"):
                    return blood_group_quantities(), status.HTTP_200_OK

                if(checkHospital == "2"):
                    return result, status.HTTP_200_OK

        return result , status.HTTP_200_OK

    def post(self):
        if request.method == 'POST':
             deletereq = request.args.get('delete')
             delGrp = request.args.get('deleteGrp')
             delType = request.args.get('deleteType')
             delQuantity = request.args.get('deleteQuantity')
            
             if(deletereq != None):
                deleteBloodSample(deletereq);
                return "success:{}", status.HTTP_200_OK
            
             if(delGrp != None and delType != None and delQuantity != None):
                print("group = "+delGrp)
                print("type = "+delType)
                print("quantity = "+delQuantity)
                message = blood_requests(delGrp, delType, int(delQuantity))
                print(message)
                return message, status.HTTP_200_OK

             result = request.get_json()
             print(result);
             name = result['name'];
             contact = result['contact'];
             bld_grp = result['blood_group'];
             bld_type = result['blood_type'];
             useByDate = result['use_by_date'];
             arrival = result['arrival_date'];
             pathology = result['pathology'];
             arrival = result['arrival_date'];
             #print(arrival);
             addBloodSample(name, contact, bld_grp, bld_type, useByDate, arrival, pathology)
             return result, status.HTTP_200_OK

if __name__ == '__main__':
  app.run(debug=True)
