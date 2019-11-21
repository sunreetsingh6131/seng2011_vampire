/*class Blood
{
    var typeOf: char, received: int, useby: int, checked : bool;
    
    constructor (typeOfin: char, receivedin: int, usebyin: int, checkedin : bool)
    modifies this;
    requires typeOfin == 'A' || typeOfin == 'B' || typeOfin == 'C';
    { typeOf := typeOfin; received := receivedin; useby := usebyin; checked := checkedin;}
    
    method Check() returns (checked: bool)
    modifies this;
    {
    //Assuming goes to pathologist and gives OK
    checked := true;
    }
    
    method GetType() returns (typeOf: char)
    {
        typeOf := this.typeOf;
    }
    
}*/

/*class Date
{
    var day: int, month: int, year: int
    
    constructor (dayin: int, monthin: int, yearin:int)
    requires (dayin != null && monthin != null && yearin != null); 
    modifies this;
    {day := dayin; month := monthin; year := yearin;}
    
    static method First (date1: Date, date2: Date) returns (first: Date, second: Date)
    requires (date1 != null && date2 != null);
    ensures (first != null && second != null);
    {
        first:= date1; second := date2;
        if (date1 != null && date2 != null){
            if (date1.year < date2.year) { first:= date1; second := date2;}
            if (date2.year < date1.year) { first:= date2; second := date1;}
            else{
                if (date1.month < date2.month) { first:= date1; second := date2;}
                if (date2.month < date1.month) { first:= date2; second := date1;}
                else{
                    if (date1.day < date2.day) { first:= date1; second := date2;}
                    if (date2.day < date1.day) { first:= date2; second := date1;}
                    else{
                        first:= date1; second := date2;
                    }
                }
            }
        
        }
    }

}*/




class {:autocontracts} Quack<Char>
{
     var buf: array<char>;
     var m: int, n: int; // indexes in buf[]
     ghost var shadow: seq<char>;
     ghost var typeAshadow: seq<char>;
     ghost var typeBshadow: seq<char>;
     ghost var typeCshadow: seq<char>;
     predicate Valid()
     { buf!=null && buf.Length!=0 && 0<=m<=n<=buf.Length && shadow==buf[m..n] }
     constructor(size: int)
     requires size>0;
     ensures shadow == [];
     ensures fresh(buf);
     { buf := new char[size];
         m, n:= 0, 0;
         shadow:= [];
     }

    method Empty() returns (x:bool)
    ensures x <==> shadow==[] // x==true is equiv to an empty shadow
    {
         x := m==n; // x is true if m and n are the same
    }

    method Pop() returns(x: char) // + Push() together make a stack
     requires buf != null; // version 1.9.7
     requires shadow != []
     requires typeAshadow != []
     requires typeBshadow != []
     requires typeCshadow != []
     ensures x == old(shadow)[|old(shadow)|-1] // this is the tail element
     ensures shadow == old(shadow)[..|old(shadow)|-1] // this is the new shadow
     {
         x, n:= buf[n-1], n-1; // get tail, remove from buf
         shadow:= shadow[..|shadow|-1]; // chop the tail off shadow
         if x == 'A'
         {
            typeAshadow := typeAshadow[..|typeAshadow|-1];
         }
         if x == 'B'
         {
            typeBshadow := typeBshadow[..|typeBshadow|-1];
         }
         if x == 'C'
         {
            typeCshadow := typeCshadow[..|typeCshadow|-1];
         }
     }

     method Qop() returns(x: char) // + Push() works as a queue
     requires buf != null; // version 1.9.7
     requires shadow != [];
     requires typeAshadow != []
     requires typeBshadow != []
     requires typeCshadow != []
     ensures x == old(shadow)[0] // this is the head
     ensures shadow == old(shadow)[1..] // this is the new shadow
     {
         x, m := buf[m], m+1; // get head and remove from buf
         shadow:= shadow[1..]; // chop the head off shadow
         if x == 'A'
         {
            typeAshadow := typeAshadow[1..];
         }
         if x == 'B'
         {
            typeBshadow := typeBshadow[1..];
         }
         if x == 'C'
         {
            typeCshadow := typeCshadow[1..];
         }
     }


     method Push(x: char) // same as before
     requires buf != null; // version 1.9.7
     ensures shadow == old(shadow) + [x]; // same as before
     {
         if n==buf.Length
         {
             var b:= new char[buf.Length]; // temporary buffer, same size
             if m==0 { b:= new char[2*buf.Length]; } // double size of temporary
             forall (i | 0<=i<n-m) { b[i]:= buf[m+i]; } // copy m..n to 0..n-m
             buf, m, n:= b, 0, n-m; // temporary is now buf, reset m and n
         }
         buf[n], n:= x, n+1; // now we definitely have room in the array
         shadow:= shadow + [x]; // same as before
         if x == 'A'
         {
            typeAshadow := typeAshadow + [x];
         }
         if x == 'B'
         {
            typeBshadow := typeBshadow + [x];
         }
         if x == 'C'
         {
            typeCshadow := typeCshadow + [x];
         }
     }
  
     method SearchByType(typeOf : char) returns (resultSeq: seq<char>) // need to add shadow for seqs of groups of blood
     requires buf != null;
     requires shadow != [];
     ensures buf == old(buf)
     modifies this;
     {
        /*var newBuf: array<Blood> := buf;
        var newM: int, newN: int;
        newM := m; newN := n;
        ghost var newShadow: seq<Blood> := shadow;
        ghost var newTypeAshadow: seq<char> := typeAshadow;
        ghost var newTypeBshadow: seq<char> := ;
        ghost var newTypeCshadow: seq<char>;*/
        
        var newQ := new Quack<char>(buf.Length);
        var currBlood : char;
        var k : int;
        k := 0;
        
        while m < n
            invariant buf != null
       {
            currBlood := this.Qop();
            newQ.Push(currBlood);
            if currBlood == typeOf
            {
                resultSeq := resultSeq + [currBlood];
                k := k + 1;
            }
        
       }
       this.buf := newQ.buf;
       this.m := newQ.m;
       this.n := newQ.n;
       this.shadow := newQ.shadow;
       this.typeAshadow := newQ.typeAshadow;
       this.typeBshadow := newQ.typeBshadow;
       this.typeCshadow := newQ.typeCshadow;
     }

     /*method Qush(x:Blood) DOES NOT WORK
     requires buf != null;
     ensures shadow == [x] + old(shadow);
     {

         if m > 0
         {
             buf[m], m:= x, m-1; // now we definitely have room in the array
             shadow:= [x] + shadow; // same as before
         }
         else
         {
            var k : int := 1;
             while k < buf.Length
                invariant  0 < k <= buf.Length
             {
                buf[k] := buf[k-1];
                k := k+1;
             }
             buf[0] := x;
             n := n + 1;
         }
     }*/
}
 


method Main() {
    /*var date1, date2,date3,date4,date5 : Date;
    date1 := new Date(12,6,1990);
    date2 := new Date(15,2,1995);
    date3 := new Date(30,11,1998);
    date4,date5 := Date.First(date2,date1);
    assert(date1.day == 12 && date1.month == 6 && date1.year == 1990);
    assert (date5 != null);
    assert (date4 != null);
    assert (date4.year == 1995 || date4.year == 1990);
    assert (date1.year == date4.year && 
                date1.month == date4.month &&
                date1.day == date4.day);
    assert (date2.year == date5.year && 
                date2.month == date5.month &&
                date2.day == date5.day);*/
                
    
                
    
}


