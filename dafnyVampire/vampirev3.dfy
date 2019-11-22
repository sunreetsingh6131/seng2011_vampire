datatype Blood = Blood(typeOf:char,date:int)

method FindOldest (a:array<Blood>) returns (minimum:Blood)
requires a != null;
requires a.Length > 0;
ensures forall i :: 0 <= i < a.Length ==> minimum.date <= a[i].date;
ensures multiset(a[..]) == multiset(old(a[..]))
{

    var minimumDate : int := a[0].date;
    var minimumType : char := a[0].typeOf;
    var i : int := 1;
    while (i < a.Length)
    invariant (i <= a.Length)
    invariant (forall j :: 0 <= j < i ==> minimumDate <= a[j].date) 
        && (exists j :: 0 <= j < i && minimumDate == a[j].date)
    {
        if (a[i].date <= minimumDate){
            minimumDate := a[i].date;
            minimumType := a[i].typeOf;
        }
        i := i + 1;
    }
    minimum := Blood(minimumType,minimumDate);    
    return minimum;
}

/*static method findOldestOfType (a:array<Blood>,typeOf:char) returns (minimum:Blood)
requires a != null;
requires a.Length >= 0;
ensures forall i :: 0 <= i < a.Length ==> minimum.date <= a[i].date;
ensures multiset(a[..]) == multiset(old(a[..]))
{
    if (a.Length == 0) {minimum := Blood('N',0);}
    else{
        var minimumDate : int := a[0].date;
        var i : int := 1;
        while (i < a.Length)
        invariant (i <= a.Length)
        invariant (forall j :: 0 <= j < i ==> minimumDate <= a[j].date) 
            && (exists j :: 0 <= j < i && minimumDate == a[j].date)
        {
            if (a[i].date <= minimumDate){
                minimumDate := a[i].date;
            }
            i := i + 1;
        }
        minimum := Blood('A',minimumDate);
    }
    return minimum;
}*/

method FindType (a:array<Blood>,typeOf:char) returns (newA:array<Blood>)//(sortedBlood:seq<Blood>)
requires a != null;
requires a.Length > 1;
//ensures forall i :: 0 <= i < (newA.Length-1) ==> newA[i].date <= newA[i+1].date;
//ensures forall i :: 0 <= i < newA.Length ==> newA[i].typeOf == typeOf;
ensures multiset(a[..]) == multiset(old(a[..]))
{
    newA := new Blood[a.Length];
    var i : int := 1;
    var count : int := 0;
    while (i < a.Length)
    invariant (i <= a.Length)
    //invariant (forall j :: 0 <= j < count ==> newA[j].typeOf == typeOf)
    invariant (count <= i)
    {
        if a[i].typeOf == typeOf{
            newA[count] := a[i];
            count := count + 1;
        }
        i := i + 1;
    }
    SortArray(newA);
    return newA;
    

}

predicate Sorted(a: array<Blood>, low:int, high:int)
requires a != null;
requires 0<=low<=high<=a.Length;
reads a;
{ forall j,k:: low<=j<k<high ==> a[j].date<=a[k].date }

method SortArray(a:array<Blood>) 
requires a != null;
requires a.Length > 1;
ensures forall i :: 0 <= i < (a.Length-1) ==> a[i].date <= a[i+1].date;
ensures multiset(a[..]) == multiset(old(a[..]));
modifies a;
{
    var up := 1;
    while (up < a.Length)
    invariant 1 <= up <= a.Length;
    invariant Sorted(a,0,up);
    invariant multiset(a[..]) == multiset(old(a[..]));
    {
        var down := up;
        while (down >= 1 && a[down-1].date > a[down].date)
        invariant 0 <= down <= up;
        invariant forall i,j :: (0<=i<j<=up && j!=down) ==> a[i].date<=a[j].date;
        invariant multiset(a[..]) == multiset(old(a[..]))
        {
            a[down-1], a[down] := a[down], a[down-1];
            down := down - 1;
        }
        up := up + 1;
    }
}

method Main() {
    var ar : array<Blood> := new Blood[3];
    ar[0] := Blood('A', 7);
    ar[1] := Blood('B', 3);
    ar[2] := Blood('A', 2);
    

}
