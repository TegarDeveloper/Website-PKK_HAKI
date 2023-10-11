using System;
class Mahasiswa
{
    public string Nama { get; set; }
    public int Umur { get; set; }
    public Mahasiswa(string nama, int umur)
    {
        Nama = nama;
        Umur = umur;
    }
    public void Perkenalan()
    {
        Console.WriteLine($"Halo, nama saya {Nama} dan saya berumur {Umur} tahun.");
    }
}
class Program
{
    static void Main(string[] args)
    {
        Mahasiswa mahasiswa1 = new Mahasiswa("John", 20);
        Mahasiswa mahasiswa2 = new Mahasiswa("Jane", 22);
        mahasiswa1.Perkenalan();
        mahasiswa2.Perkenalan();
    }
}