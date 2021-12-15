using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Infrastructure;
using UserManagement.Service.IRepository.Authentication;

namespace UserManagement.UOW
{
    public interface IUnitOfWork
    {
       
        public IGroupRepository Groups { get; }
        public IUserGroupRepository UserGroups { get; }
       
        DatabaseFacade Database { set; get; }

        Task<int> SaveChangesAsync();
    }
}