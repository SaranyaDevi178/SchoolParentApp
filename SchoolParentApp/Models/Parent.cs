using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SchoolParentApp.Models
{
    public partial class Parent
    {
        public int Id { get; set; }
        public string? StudentRegisterNumber { get; set; }
        [Required]
        public string FatherName { get; set; } = null!;
        [Required]
        public string MotherName { get; set; } = null!;
        [Required]
        public string StudentName { get; set; } = null!;
        [Required]
        public string Addresses { get; set; } = null!;
        [Required]
        public string States { get; set; } = null!;
        [Required]
        public string Country { get; set; } = null!;
        [Required]
        public string City { get; set; } = null!;
        [Required]
        public string ZipCode { get; set; } = null!;
        [Required]
        public string Email { get; set; } = null!;
        [Required]
        public string Password { get; set; } = null!;
        [Required]
        public DateTime DateOfBirth { get; set; }
        [Required]
        public string? StudentClass { get; set; }
        [Required]
        public string PrimaryContactPerson { get; set; } = null!;
        [Required]
        public string? PrimaryContactPersonMobileNo { get; set; }
        [Required]
        public string SecondaryContactPerson { get; set; } = null!;
        [Required]
        public string? SecondaryContactPersonMobileNo { get; set; }
        public bool? CircularAcknowledgement { get; set; }
        public string? ApplicationStatus { get; set; }

        public virtual ApplicationStatus? ApplicationStatusNavigation { get; set; }
    }
}
