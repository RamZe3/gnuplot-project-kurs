using System;

namespace GnuplotBackEnd.Entities
{
    public class GnuplotTemplate
    {
        public String Name { get; set; }
        public String Function { get; set; }
        public int XRange { get; set; }
        public int YRange { get; set; }
        public bool Grid { get; set; }
        public String Background { get; set; }
        
    }
}