using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UserManagement.DomainClasses.Entities.Authentication;
using UserManagement.DomainClasses.Config;

namespace UserManagement.DomainClasses.Config.Authentication
{
    public class RoleConfig : BaseEntityTypeConfiguration<Role>
    {
        public override void Configure(EntityTypeBuilder<Role> builder)
        {
            builder.Property(e => e.Name).HasMaxLength(450).IsRequired();
            builder.HasIndex(e => e.Name).IsUnique();
            base.Configure(builder);
        }
    }
}
