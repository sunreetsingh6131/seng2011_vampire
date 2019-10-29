#!usr/bin/python3

import json

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

    print(json.dumps(data, indent=4))
    size = sizeOfList()
    print(size)


#readJson()
#deleteBloodSample(3)
#addBloodSample("Harry", "harryisonline@gmail.com", 'O', "general", "12/12/19", "29/10/19", "ABC Pathology ltd.")
