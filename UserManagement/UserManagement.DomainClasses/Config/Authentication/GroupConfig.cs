using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using UserManagement.DomainClasses.Config;
using UserManagement.DomainClasses.Entities.Authentication;

namespace UserManagement.DomainClasses.Config.Authentication
{
    public class GroupConfig : BaseEntityTypeConfiguration<Group>
    {
        public override void Configure(EntityTypeBuilder<Group> builder)
        {
            builder.Property(e => e.Title).HasMaxLength(50).IsRequired();
            builder.HasIndex(e => e.Title).IsUnique();
            base.Configure(builder);
        }
    }
}
