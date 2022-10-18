using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SchoolStaff.Models
{
    public partial class Circular
    {
        public int Id { get; set; }
        public DateTime? NotificationDate { get; set; }
        public string? InformationText { get; set; }
        private string? notificationPostedBy;
        [Required]
        public string? NotificationPostedBy { get { return notificationPostedBy; } set { notificationPostedBy = "Admin"; } }

        public virtual staff? NotificationPostedByNavigation { get; set; }
    }
}
