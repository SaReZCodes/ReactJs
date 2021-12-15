using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UserManagement.DomainClasses.Entities.Authentication;
using UserManagement.DomainClasses.Config;

namespace UserManagement.DomainClasses.Config.Authentication
{
    public class UserConfig : BaseEntityTypeConfiguration<User>
    {
        public override void Configure(EntityTypeBuilder<User> builder)
        {
            builder.Property(e => e.Username).HasMaxLength(450).IsRequired();
            builder.HasIndex(e => e.Username).IsUnique();
            builder.Property(e => e.Password).IsRequired();
            builder.Property(e => e.SerialNumber).HasMaxLength(450);
            base.Configure(builder);
        }
    }
}
