public class Kata
{
  public static bool Feast(string beast, string dish)
  {
    return dish[0] == beast[0] && dish[dish.Length - 1] == beast[beast.Length - 1];
  }
}