using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UserManagement.DomainClasses.Entities.Authentication;
using UserManagement.DomainClasses.Config;

namespace UserManagement.DomainClasses.Config.Authentication
{
   public class UserGroupConfig : BaseEntityTypeConfiguration<UserGroup>
    {
        public override void Configure(EntityTypeBuilder<UserGroup> builder)
        {
            builder.HasKey(e => new { e.UserId, e.GroupId });
            builder.HasIndex(e => e.UserId);
            builder.HasIndex(e => e.GroupId);
            builder.Property(e => e.UserId);
            builder.Property(e => e.GroupId);
            builder.HasOne(d => d.Group).WithMany(p => p.UserGroups).HasForeignKey(d => d.GroupId);
            builder.HasOne(d => d.User).WithMany(p => p.UserGroups).HasForeignKey(d => d.UserId);
            base.Configure(builder);
        }
    }
}