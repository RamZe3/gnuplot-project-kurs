namespace GnuplotBackEnd.DAL.Interfaces
{
    public interface UserDALInterface
    {
        bool Register(string login, string password);
        bool Login(string login, string password);
        
    }
}