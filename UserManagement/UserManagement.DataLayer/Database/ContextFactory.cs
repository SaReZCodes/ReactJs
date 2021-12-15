using System.IO;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Http;
namespace UserManagement.DataLayer.Database
{
    public sealed class ContextFactory : IDesignTimeDbContextFactory<UserManagementDbContext>
    {
        public ContextFactory()
        {

        }
        public readonly IHttpContextAccessor _accessor;
        public ContextFactory(IHttpContextAccessor accessor)
        {
            _accessor = accessor;
        }

        public UserManagementDbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<UserManagementDbContext>();
            var basePath = Directory.GetCurrentDirectory();

            var configuration = new ConfigurationBuilder()
                                    .SetBasePath(basePath)
                                    .AddJsonFile("appsettings.json")
                                    .Build();

            builder.UseSqlite(configuration.GetConnectionString("UserManagementConnectionString"));

            return new UserManagementDbContext(builder.Options, _accessor);
        }
    }
}
