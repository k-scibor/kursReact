// See https://aka.ms/new-console-template for more information
/*
 Program powinien sprawdzać i wypisywać czy jedna podana liczba jest podzielna przez drugą*/
Console.WriteLine("Podaj liczbę całkowitą: ");
int a = int.Parse(Console.ReadLine());
Console.WriteLine("Podaj drugą liczbę całkowitą: ");
int b = int.Parse(Console.ReadLine());
if (a % b != 0)
{
    Console.WriteLine("Pierwsza liczba jest podzielna przez drugą");
}
else
{
    Console.WriteLine("Pierwsza liczba nie jest podzielna przez drugą");
}