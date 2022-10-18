using System;
using System.Collections.Generic;

namespace AuthServer.Models
{
    public partial class FeesDetail
    {
        public int Id { get; set; }
        public string? Class { get; set; }
        public string? FeesStructure { get; set; }
    }
}
