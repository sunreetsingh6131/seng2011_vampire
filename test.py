try:  
    a = 10/0
    print (a)
except ArithmeticError:  
        print ("Arithmetic exception raised." )
else:  
    print ("Success.")
