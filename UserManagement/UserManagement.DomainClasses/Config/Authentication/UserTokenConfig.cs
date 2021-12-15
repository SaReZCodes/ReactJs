using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using UserManagement.DomainClasses.Entities.Authentication;
using UserManagement.DomainClasses.Config;

namespace UserManagement.DomainClasses.Config.Authentication
{
    public class UserTokenConfig : BaseEntityTypeConfiguration<UserToken>
    {
        public override void Configure(EntityTypeBuilder<UserToken> builder)
        {
            builder.HasOne(ut => ut.User)
                      .WithMany(u => u.UserTokens)
                      .HasForeignKey(ut => ut.UserId);

            builder.Property(ut => ut.RefreshTokenIdHash).HasMaxLength(450).IsRequired();
            builder.Property(ut => ut.RefreshTokenIdHashSource).HasMaxLength(450);
            base.Configure(builder);
        }
    }
}
