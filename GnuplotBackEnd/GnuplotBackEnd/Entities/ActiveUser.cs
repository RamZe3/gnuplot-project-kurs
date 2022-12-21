using System;

namespace GnuplotBackEnd.Entities
{
    public class ActiveUser
    {
        public Guid ID { get; set; }
        public  string Login { get; set; }
        public string Password { get; set; }
    }
}