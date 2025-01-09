// See https://aka.ms/new-console-template for more information
/* Program powinien wypisywać komunikat kiedy pierwsza z podanych liczb jest różna i większa od drugiej*/
Console.WriteLine("Podaj pierwszą liczbę: ");
int a = int.Parse(Console.ReadLine());
Console.WriteLine("Podaj drugą lczbę: ");
int b = int.Parse(Console.ReadLine());
if(a != b || a > b)
{
    Console.WriteLine("Liczby nie są równe i pierwsza jest większa");
}