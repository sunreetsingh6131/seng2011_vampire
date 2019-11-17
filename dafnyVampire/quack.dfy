class Blood
{
    var typeOf: char, received: Date, useby: Date, checked : bool;
    
    constructor (typeOfin: char, receivedin: Date, usebyin: Date, checkedin : bool)
    modifies this;
    { typeOf := typeOfin; received := receivedin; useby := usebyin; checked := checkedin;}
    
    method Check() returns (checked: bool)
    modifies this;
    {
    //Assuming goes to pathologist and gives OK
    checked := true;
    }
    

}

class Date
{
    var day: int, month: int, year: int
    
    constructor (dayin: int, monthin: int, yearin:int)
    modifies this;
    {day := dayin; month := monthin; year := yearin;}
    
    static method First (date1: Date, date2: Date) returns (first: Date, second: Date)
    {
    if (date1.year < date2.year) { first:= date1; second := date2;}
    if (date2.year < date1.year) { first:= date2; second := date1;}
    else{
        if (date1.month < date2.month) { first:= date1; second := date2;}
        if (date2.month < date1.month) { first:= date2; second := date1;}
        else{
            if (date1.day < date2.day) { first:= date1; second := date2;}
            if (date2.day < date1.day) { first:= date2; second := date1;}
        }
        }
    }

}




class {:autocontracts} Quack<Blood>
{
     var buf: array<Blood>;
     var m: int, n: int; // indexes in buf[]
     ghost var shadow: seq<Blood>;
     predicate Valid()
     { buf!=null && buf.Length!=0 && 0<=m<=n<=buf.Length && shadow==buf[m..n] }
     constructor(size: int)
     requires size>0;
     ensures shadow == [];
     ensures fresh(buf);
     { buf := new Blood[size];
         m, n:= 0, 0;
         shadow:= [];
     }

    method Empty() returns (x:bool)
    ensures x <==> shadow==[] // x==true is equiv to an empty shadow
    {
         x := m==n; // x is true if m and n are the same
    }

    method Pop() returns(x: Blood) // + Push() together make a stack
     requires buf != null; // version 1.9.7
     requires shadow != []
     ensures x == old(shadow)[|old(shadow)|-1] // this is the tail element
     ensures shadow == old(shadow)[..|old(shadow)|-1] // this is the new shadow
     {
         x, n:= buf[n-1], n-1; // get tail, remove from buf
         shadow:= shadow[..|shadow|-1]; // chop the tail off shadow
     }

     method Qop() returns(x: Blood) // + Push() works as a queue
     requires buf != null; // version 1.9.7
     requires shadow != [];
     ensures x == old(shadow)[0] // this is the head
     ensures shadow == old(shadow)[1..] // this is the new shadow
     {
         x, m := buf[m], m+1; // get head and remove from buf
         shadow:= shadow[1..]; // chop the head off shadow
     }

// method Push(x: Blood)
// requires buf != null; // version 1.9.7
// ensures shadow == old(shadow) + [x] // easy to prove, you would think
// {
//  a[n], n := x, n+1; // add new Blood to the array
//  shadow := shadow + [x]; // add new Blood to shadow
// }

     method Push(x: Blood) // same as before
     requires buf != null; // version 1.9.7
     ensures shadow == old(shadow) + [x]; // same as before
     {
         if n==buf.Length
         {
             var b:= new Blood[buf.Length]; // temporary buffer, same size
             if m==0 { b:= new Blood[2*buf.Length]; } // double size of temporary
             forall (i | 0<=i<n-m) { b[i]:= buf[m+i]; } // copy m..n to 0..n-m
             buf, m, n:= b, 0, n-m; // temporary is now buf, reset m and n
         }
         buf[n], n:= x, n+1; // now we definitely have room in the array
         shadow:= shadow + [x]; // same as before
     }
     method SearchByType(typeOf : char) returns (resultSeq: seq<Blood>)
     requires this.Valid()
     {
        var newQuack := new Quack<Blood>(1000);
        var empty:bool := this.Empty();
        while(empty == false)
        invariant this.Valid()
        //add more invariants?
        {
            var qoppedBlood:Blood := this.Qop();
            if (resultSeq == []) {}
            else{
                
            
            }
            empty := this.Empty();
        }
     }
 
}
