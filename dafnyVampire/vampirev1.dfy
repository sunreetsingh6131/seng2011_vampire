datatype Blood = Blood(1:char,2:int)
class F
{
    static method findMinimumQuantity (a:array<Blood>) returns (minimum:Blood)
    requires a != null;
    requires a.Length >= 0;
    ensures forall i :: 0 <= i < a.Length ==> minimum.2 <= a[i].2;
    ensures multiset(a[..]) == multiset(old(a[..]))
    {
        if (a.Length == 0) {minimum := Blood('N',0);}
        else{
            var minimumDate : int := a[0].2;
            var i : int := 1;
            while (i < a.Length)
            invariant (i <= a.Length)
            invariant (forall j :: 0 <= j < i ==> minimumDate <= a[j].2) 
                && (exists j :: 0 <= j < i && minimumDate == a[j].2)
            {
                if (a[i].2 <= minimumDate){
                    minimumDate := a[i].2;
                }
                i := i + 1;
            }
            minimum := Blood('A',minimumDate);
        }
        return minimum;
    }
}
method Main() {
    var ar : array<Blood> := new Blood[3];
    ar[0] := Blood('A', 7);
    ar[1] := Blood('B', 3);
    ar[2] := Blood('A', 2);
    

}
