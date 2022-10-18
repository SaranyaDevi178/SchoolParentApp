using System;
using System.Collections.Generic;

namespace AuthServer.Models
{
    public partial class HolidayDetail
    {
        public int Id { get; set; }
        public DateTime? HolidayDate { get; set; }
        public string? HolidayReason { get; set; }
    }
}
