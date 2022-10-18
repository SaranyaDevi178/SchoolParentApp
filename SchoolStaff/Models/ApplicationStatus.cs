using System;
using System.Collections.Generic;

namespace SchoolStaff.Models
{
    public partial class ApplicationStatus
    {
        public ApplicationStatus()
        {
            Parents = new HashSet<Parent>();
        }

        public int StatusId { get; set; }
        public string Statustype { get; set; } = null!;

        public virtual ICollection<Parent> Parents { get; set; }
    }
}
