datatype Blood = Blood(typeOf:char,date:int)

class BloodSearcher
{

    var a: array<Blood>;
     
    constructor (lengthIn : int)
    requires lengthIn > 0;
    modifies this;
    { a := new Blood[lengthIn];}
    
    
    method FindOldest() returns (minimum:Blood) //Finds single oldest blood in our array (presumably for destruction)
    requires a != null;
    requires a.Length > 0;
    ensures forall i :: 0 <= i < a.Length ==> minimum.date <= a[i].date;
    ensures multiset(a[..]) == multiset(old(a[..]))
    modifies a;
    {

        var minimumDate : int := a[0].date;
        var minimumType : char := a[0].typeOf;
        var i : int := 1;
        while (i < a.Length)
        
        invariant (i <= a.Length)
        invariant (forall j :: 0 <= j < i ==> minimumDate <= a[j].date) 
            && (exists k :: 0 <= k < i && minimumDate == a[k].date)
        {
            if (a[i].date <= minimumDate){
                minimumDate := a[i].date;
                minimumType := a[i].typeOf;
            }
            i := i + 1;
        }
        minimum := Blood(minimumType,minimumDate);    
        //return minimum;
    }
    
    method findOldestOfType (typeOf:char) returns (oldest:Blood) // Finds oldest blood of a certain type
    requires a != null;
    requires a.Length > 1;
    //ensures !exists i :: 0 <= i < a.Length ==> (oldest.date > a[i].date) && (oldest.typeOf == a[i].typeOf);
    ensures multiset(a[..]) == multiset(old(a[..]))
    {
        
        var newA : array<Blood> := this.FindType(typeOf);
        if (newA.Length > 0){
            oldest := newA[0];
        }else{
            oldest := Blood('N',0);
        }
    }

    method FindType (typeOf:char) returns (newA:array<Blood>)//finds all blood of a certain type, with oldest at the [0] index
    requires a != null;
    requires a.Length > 1;
    ensures newA != null;
    ensures forall i :: 0 <= i < (newA.Length-1) ==> newA[i].date <= newA[i+1].date;
    //ensures forall i :: 0 <= i < newA.Length-1 ==> newA[i].typeOf == typeOf;

    ensures multiset(a[..]) == multiset(old(a[..]))
    {
        newA := new Blood[a.Length];
        var i : int := 1;
        var count : int := 0;
        while (i < a.Length)
        invariant (i <= a.Length)
        invariant (forall j :: 0 <= j < count && (j < a.Length) ==> newA[j].typeOf == typeOf)
        invariant (count < i)
        {
            if a[i].typeOf == typeOf{
                newA[count] := a[i];
                count := count + 1;
            }
            i := i + 1;
        }
        SortArray(newA);
        //return newA;

    }

    predicate Sorted(ar: array<Blood>, low:int, high:int)
    requires ar != null;
    requires 0<=low<=high<=ar.Length;
    reads ar;
    { forall j,k:: low<=j<k<high ==> ar[j].date<=ar[k].date }

    method SortArray(ar:array<Blood>) //Sorts an array of Blood
    requires ar != null;
    requires ar.Length > 1;
    ensures forall i :: 0 <= i < (ar.Length-1) ==> ar[i].date <= ar[i+1].date;
    ensures multiset(ar[..]) == multiset(old(ar[..]));
    modifies ar;
    //Uses slightly modified Insertion sort form Week10Lecture slides
    {
        var up := 1;
        while (up < ar.Length)
        invariant 1 <= up <= ar.Length;
        invariant Sorted(ar,0,up);
        invariant multiset(ar[..]) == multiset(old(ar[..]));
        {
            var down := up;
            while (down >= 1 && ar[down-1].date > ar[down].date)
            invariant 0 <= down <= up;
            invariant forall i,j :: (0<=i<j<=up && j!=down) ==> ar[i].date<=ar[j].date;
            invariant multiset(ar[..]) == multiset(old(ar[..]))
            {
                ar[down-1], ar[down] := ar[down], ar[down-1];
                down := down - 1;
            }
            up := up + 1;
        }
    }
}
method Main() {

    

}
