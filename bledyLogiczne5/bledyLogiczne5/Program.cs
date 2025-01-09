/*Program powinien określać czy pierwszy podany wyraz jest dłuższy czy krótszy od drugiego*/
Console.WriteLine("Podaj wyraz: ");
string a = Console.ReadLine();
Console.WriteLine("Podaj drugi wyraz: ");
string b = Console.ReadLine();
if (a.Length < b.Length)
{
    Console.WriteLine("Pierwszy wyraz jest dłuższy od drugiego");
}
else Console.WriteLine("Pierwszy wyraz jest krótszy od drugiego");