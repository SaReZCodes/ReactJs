using System;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using UserManagement.DataLayer.Database;
using UserManagement.Service.IRepository.Authentication;
using UserManagement.Service.Repository.Authentication;

namespace UserManagement.UOW
{
    public sealed class UnitOfWork : IUnitOfWork
    {
        private readonly UserManagementDbContext _context;
        public DatabaseFacade Database { set; get; }
        public UnitOfWork(UserManagementDbContext context)
        {
            _context = context;
            Database = context.Database;
            Groups = new GroupRepository(_context);
            UserGroups = new UserGroupRepository(_context);
        }

        public IGroupRepository Groups { get; private set; }
        public IUserGroupRepository UserGroups { get; }

        public Task<int> SaveChangesAsync()
        {
            var ip = _context._accessor.HttpContext.Connection.RemoteIpAddress.ToString();
            var claimsIdentity = _context._accessor.HttpContext.User.Identity as ClaimsIdentity;
            var userDataClaim = claimsIdentity?.FindFirst(ClaimTypes.UserData);
            var userId = userDataClaim?.Value;
            var id = string.IsNullOrWhiteSpace(userId) ? 0 : int.Parse(userId);
            _context.ChangeTracker.DetectChanges();

            foreach (var entry in _context.ChangeTracker.Entries())
            {
                if (entry.State == EntityState.Modified || entry.State == EntityState.Added)
                {
                    try
                    {
                        entry.Property("IpAddressLog").CurrentValue = ip;
                        entry.Property("UserIdLog").CurrentValue = id;
                        entry.Property("ModifiedDateLog").CurrentValue = System.DateTime.Now;
                    }
                    catch (Exception)
                    {

                    }
                }
            }

            return _context.SaveChangesAsync();
        }

    }
}
