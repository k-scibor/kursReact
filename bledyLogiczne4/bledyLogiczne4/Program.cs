// See https://aka.ms/new-console-template for more information
/*Program powienien obliczać średnią ilość paliwa zużytego na przejechanie 100km*/
Console.WriteLine("Podaj ilość przejechanyh kilometrów: ");
double km = double.Parse(Console.ReadLine());
Console.WriteLine("Podaj ilość spalonego paliwa: ");
double p = double.Parse(Console.ReadLine());
double pNa100km = km / 100 / p; 
Console.WriteLine("Spalanie wyniosło średnio " +  pNa100km + "l na 100km");