using System;
using System.Collections.Generic;

namespace AuthServer.Models
{
    public partial class Circular
    {
        public int Id { get; set; }
        public DateTime? NotificationDate { get; set; }
        public string? InformationText { get; set; }
        public string? NotificationPostedBy { get; set; }

        public virtual staff? NotificationPostedByNavigation { get; set; }
    }
}
