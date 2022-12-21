using GnuplotBackEnd.DAL.Interfaces;

namespace GnuplotBackEnd.DAL.JsonDAL
{
    public class UserJsonDAL : UserDALInterface
    {
        public string FileName  = "UsersBase.json";
        public bool Register(string login, string password)
        {
            throw new System.NotImplementedException();
        }

        public bool Login(string login, string password)
        {
            throw new System.NotImplementedException();
        }
    }
}