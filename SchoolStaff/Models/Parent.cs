using System;
using System.Collections.Generic;

namespace SchoolStaff.Models
{
    public partial class Parent
    {
        public int Id { get; set; }
        public string? StudentRegisterNumber { get; set; }
        public string FatherName { get; set; } = null!;
        public string MotherName { get; set; } = null!;
        public string StudentName { get; set; } = null!;
        public string Addresses { get; set; } = null!;
        public string States { get; set; } = null!;
        public string Country { get; set; } = null!;
        public string City { get; set; } = null!;
        public string ZipCode { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
        public DateTime DateOfBirth { get; set; }
        public string? StudentClass { get; set; }
        public string PrimaryContactPerson { get; set; } = null!;
        public string? PrimaryContactPersonMobileNo { get; set; }
        public string SecondaryContactPerson { get; set; } = null!;
        public string? SecondaryContactPersonMobileNo { get; set; }
        public bool? CircularAcknowledgement { get; set; }
        public string? ApplicationStatus { get; set; }

        public virtual ApplicationStatus? ApplicationStatusNavigation { get; set; }
    }
}
