using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SchoolStaff.Models
{
    public partial class HolidayDetail
    {
       
        public int Id { get; set; }
        public DateTime? HolidayDate { get; set; }
        public string? HolidayReason { get; set; }
    }
}
