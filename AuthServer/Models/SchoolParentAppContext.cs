using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace AuthServer.Models
{
    public partial class SchoolParentAppContext : DbContext
    {
        public SchoolParentAppContext()
        {
        }

        public SchoolParentAppContext(DbContextOptions<SchoolParentAppContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ApplicationStatus> ApplicationStatuses { get; set; } = null!;
        public virtual DbSet<Circular> Circulars { get; set; } = null!;
        public virtual DbSet<FeesDetail> FeesDetails { get; set; } = null!;
        public virtual DbSet<HolidayDetail> HolidayDetails { get; set; } = null!;
        public virtual DbSet<Parent> Parents { get; set; } = null!;
        public virtual DbSet<staff> staff { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=CTSDOTNET800;Initial Catalog=SchoolParentApp;User ID=sa;Password=pass@word1");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ApplicationStatus>(entity =>
            {
                entity.HasKey(e => e.Statustype)
                    .HasName("PK__Applicat__A48F9B48772F28B8");

                entity.ToTable("ApplicationStatus");

                entity.Property(e => e.Statustype)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.StatusId).ValueGeneratedOnAdd();
            });

            modelBuilder.Entity<Circular>(entity =>
            {
                entity.ToTable("Circular");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.InformationText)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.NotificationDate).HasColumnType("date");

                entity.Property(e => e.NotificationPostedBy)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.HasOne(d => d.NotificationPostedByNavigation)
                    .WithMany(p => p.Circulars)
                    .HasForeignKey(d => d.NotificationPostedBy)
                    .HasConstraintName("FK__Circular__Notifi__3D5E1FD2");
            });

            modelBuilder.Entity<FeesDetail>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.Class)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.FeesStructure)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("id");
            });

            modelBuilder.Entity<HolidayDetail>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.HolidayDate).HasColumnType("date");

                entity.Property(e => e.HolidayReason)
                    .HasMaxLength(400)
                    .IsUnicode(false);

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("id");
            });

            modelBuilder.Entity<Parent>(entity =>
            {
                entity.ToTable("Parent");

                entity.HasIndex(e => e.Email, "UQ__Parent__A9D105348D7CB08B")
                    .IsUnique();

                entity.HasIndex(e => e.SecondaryContactPersonMobileNo, "UQ__Parent__B045700DA74B722B")
                    .IsUnique();

                entity.HasIndex(e => e.PrimaryContactPersonMobileNo, "UQ__Parent__BECB24C2FC205869")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Addresses).HasMaxLength(500);

                entity.Property(e => e.ApplicationStatus)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.City)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Country)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.DateOfBirth).HasColumnType("date");

                entity.Property(e => e.Email).HasMaxLength(500);

                entity.Property(e => e.FatherName)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.MotherName)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Password).HasMaxLength(500);

                entity.Property(e => e.PrimaryContactPerson)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.PrimaryContactPersonMobileNo)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.SecondaryContactPerson)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.SecondaryContactPersonMobileNo)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.States)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.StudentClass)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.StudentName)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.StudentRegisterNumber).HasComputedColumnSql("([dbo].[udf_ZeroPaddingAndConcat]('R-',CONVERT([nvarchar](100),[id]),(3),'0'))", false);

                entity.Property(e => e.ZipCode)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.HasOne(d => d.ApplicationStatusNavigation)
                    .WithMany(p => p.Parents)
                    .HasForeignKey(d => d.ApplicationStatus)
                    .HasConstraintName("FK__Parent__Applicat__38996AB5");
            });

            modelBuilder.Entity<staff>(entity =>
            {
                entity.HasKey(e => e.StaffName)
                    .HasName("PK__Staff__C5A1747F36FE8627");

                entity.ToTable("Staff");

                entity.Property(e => e.StaffName)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("id");

                entity.Property(e => e.Password).HasMaxLength(500);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
