#!usr/bin/python3

from flask import Flask, render_template,request, Response, jsonify
from flask_restplus import Api, Resource , fields, Namespace
from bottle import HTTPResponse
from flask_cors import CORS
#from flask_api import status
#import logging
#import json, os, time, decimal, re, subprocess,random,string
import json
import time
import datetime
from datetime import date
import collections

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


# REQT2 - DEPOSITS

#add sample to json file here
def addBloodSample(name, contact, bld_grp, bld_type, usebydate, arrival, pathology):
    newInput ={}
    #data = {}
    newInput['name'] = ""+name
    newInput['contact'] = ""+contact
    newInput['blood_group'] = ""+bld_grp
    newInput['blood_type'] = ""+bld_type
    newInput['use_by_date'] = ""+usebydate
    newInput['arrival_date'] = ""+arrival
    newInput['pathology'] = ""+pathology

    newInput['id'] = (sizeOfList() + 1)
    #newInput['data'] = data

    with open('data.json', mode='r') as data:
        feeds = json.load(data)
    with open('data.json', mode='w') as data:
        feeds.append(newInput)
        json.dump(feeds, data)



# REQT 3 - QUERIES 

# List of donors

def list_donors():

    donors = []
    
    with open('data.json') as f:
      data = json.load(f)  

    for i in range (0, len(data)): 
    #for key, value in data[i].items():
        newInput = {}
        newInput['name'] = data[i]['name']
        newInput['contact'] = data[i]['contact']
        newInput['blood_group'] = data[i]['blood_group']
        
        # Make sure donors aren't listed twice 
        x = json.dumps(donors, indent=4)
        donor_data = json.loads(x)
        if (check_existing_donor(donor_data, data[i]['contact']) == 'false'):
            donors.append(newInput)
            
    return (json.dumps(donors, indent=4))    

# Check if donor exists in list
def check_existing_donor(data, contact): 
    
    exists = 'false'    
    for i in range (0, len(data)): 
        if (data[i]['contact'] == contact):
            exists = 'true'
    
    return exists

#print(check_existing_donor('haileyy@gmail.com'))
#print(list_donors())
    

s = list_donors()
data1 = json.loads(s)
#print(json.dumps(data1, indent=4))

# bubble sort by exp date
def sort_by_date(data):

  
    for i in range (0, len(data) - 1): 
        for j in range (0 , len(data) - 1 - i):   
            for key, value in data[j].items():
                
                if(key == "use_by_date"):  
                    x = time.mktime(datetime.datetime.strptime(value, "%d/%m/%y").timetuple())
            for key, value in data[j + 1].items():
                if(key == "use_by_date"):    
                    y = time.mktime(datetime.datetime.strptime(value, "%d/%m/%y").timetuple())
            
            if (x > y):
                data[j], data[j + 1] = data[j + 1], data[j]
    return (json.dumps(data, indent=4)) 

with open('data.json', mode='r') as data:
    d = json.load(data)
s = sort_by_date(d)
data1 = json.loads(s)
#print(json.dumps(data1[0], indent=4))

def filterByGroup(data, bgroup) :
    
    new = []

    for i in range (0, len(data)):
        for key, value in data[i].items():

            if (key == "blood_group" and value == bgroup):
                new.append(data[i])
    return new

def search (data, bgroup, btype,  quantity) :

    result = []
    #j = 0;
    sorted_data = sort_by_date(data)

    for i in range (0, len(sorted_data)):

        check = 0;
        for key, value in data[i].items():

            if (key == "blood_group" and value == bgroup):
                #j= j +1 
                result.append(data[i])
            if (key == "blood_type" and value == btype):
                check = 1
        
        if (check == 0):
            result.remove(data[i])
               
        if (len(result) == quantity):
            break

    return (json.dumps(result, indent=4)) 

with open('data.json', mode='r') as data:
    feeds = json.load(data)  
    
sorted_data = sort_by_date(feeds)

#print(json.dumps(sorted_data, indent=4)) 

filtered_data = filterByGroup (feeds, "B")         
#print (json.dumps(filtered_data, indent=4))

searched = search(feeds, "B","general", 2)
#print (json.dumps(searched, indent = 4))




# Counts the quantity of a blood group

def count_quantity(blood_group):
    
    quantity = 0
    #i = 0
    with open('data.json', mode='r') as data:
        d = json.load(data)  
    
    for i in range (0, len(d)):
        for key, value in d[i].items():
            if(key == "blood_group" and value == blood_group):
                quantity = quantity +1
 
    return quantity   
 
# Arrange the blood groups to their corresponding quantities 

def blood_group_quantities():
    
    blood_group_quantities = []    
    
    A = {}
    B = {}
    AB = {}
    O = {}  
    
    A["A"] = count_quantity("A")
    B["B"] = count_quantity("B")
    AB["AB"] = count_quantity("AB")
    O["O"] = count_quantity("O")  
    
    blood_group_quantities.append(A)
    blood_group_quantities.append(B)
    blood_group_quantities.append(AB)
    blood_group_quantities.append(O)
    
    return (blood_group_quantities)
  
# Sort data by blood group from lowest quantity to highest quantity

def sort_blood_group_by_quantity(data):

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

    
    return (json.dumps(result, indent=4))

with open('data.json', mode='r') as data:
    d = json.load(data)    

s = sort_blood_group_by_quantity(d)
data1 = json.loads(s)
#print(json.dumps(data1[0], indent=4))

# RQT 4 - REQUESTS 

# requests for blood supplies by blood group, quantity 

def blood_requests(blood_group, requested_quantity):

    if (blood_group == 'A' or blood_group == 'B' or blood_group == 'AB' or blood_group == 'O'):
            quantity = count_quantity(blood_group)
            if (requested_quantity > quantity):
                message = "Not enough supplies"
            
            else:
                message = "Order confirmed: " + str(requested_quantity) + " blood samples of blood type " + blood_group
    else:
        message = "Please enter a valid blood group"

    # delete blood from sample
    
    return message
    
#print(blood_requests('B', 1))

# RQT 5  - WITHDRAWS

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
    for i in range (0, len(data)): 
        for key, value in data[i].items():
            if (key == "id" and value == ID):
                exp_date = data[i]['use_by_date']
                exp_date_timestamp = time.mktime(datetime.datetime.strptime(exp_date, "%d/%m/%y").timetuple())
                
    # compare
    if (exp_date_timestamp < date_today_timestamp):
        return "expired"
    else:
        return "clear"    
        

#print(check_if_expired(4))

# delete if expired
def remove_if_expired():

    with open('data.json') as f:
      data = json.load(f)    
      
    for i in range (0, len(data)): 
        for key, value in data[i].items():
            if (key == "id"):
                if (check_if_expired(value) == 'expired'):
                    deleteBloodSample(value)    
                   
    

#remove_if_expired()



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
