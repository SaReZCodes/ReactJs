using System;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using UserManagement.DomainClasses.Config.Authentication;
using UserManagement.DomainClasses.Entities.Authentication;

namespace UserManagement.DataLayer.Database
{
    public sealed class UserManagementDbContext : DbContext
    {
        public readonly IHttpContextAccessor _accessor;
        public UserManagementDbContext(DbContextOptions options, IHttpContextAccessor accessor) : base(options)
        {
            _accessor = accessor;
        }

        #region DbSets
        #region Authentication
        public DbSet<User>? Users { set; get; }
        public DbSet<Role>? Roles { set; get; }
        public DbSet<UserRole>? UserRoles { get; set; }
        public DbSet<Group>? Groups { set; get; }
        public DbSet<UserGroup>? UserGroups { get; set; }
        public DbSet<UserToken>? UserTokens { get; set; }
        #endregion
        #endregion

        protected override void OnModelCreating(ModelBuilder builder)
        {
            #region Configurations
            //auth Configs
            builder.ApplyConfiguration(new RoleConfig());
            builder.ApplyConfiguration(new UserConfig());
            builder.ApplyConfiguration(new UserRoleConfig());
            builder.ApplyConfiguration(new UserTokenConfig());
            builder.ApplyConfiguration(new GroupConfig());
            builder.ApplyConfiguration(new UserGroupConfig());
            builder.ApplyConfiguration(new GroupRoleConfig());
            #endregion
            builder.Seed();
        }
    }
}