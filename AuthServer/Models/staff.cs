using System;
using System.Collections.Generic;

namespace AuthServer.Models
{
    public partial class staff
    {
        public staff()
        {
            Circulars = new HashSet<Circular>();
        }

        public int Id { get; set; }
        public string StaffName { get; set; } = null!;
        public string? Password { get; set; }

        public virtual ICollection<Circular> Circulars { get; set; }
    }
}
