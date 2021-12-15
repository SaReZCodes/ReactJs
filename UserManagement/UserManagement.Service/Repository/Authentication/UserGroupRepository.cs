
using Microsoft.EntityFrameworkCore;
using UserManagement.DataLayer.Database;
using System.Linq.Expressions;
using UserManagement.DomainClasses.Entities.Authentication;
using UserManagement.Service.IRepository.Authentication;
using UserManagement.Service.Repository;

namespace UserManagement.Service.IRepository.Authentication
{
    public interface IUserGroupRepository : IRepository<UserGroup>
    {
        void Update(UserGroup userGroup);
		IEnumerable<UserGroup> GetAllByFilter(Expression<Func<UserGroup, bool>> expression);
    }
}

namespace UserManagement.Service.Repository.Authentication
{
    public class UserGroupRepository : Repository<UserGroup>, IUserGroupRepository
    {
        public UserGroupRepository(UserManagementDbContext context) : base(context)
        {

        }
		
        public void Update(UserGroup userGroup)
        {
            UserManagementContext.Update(userGroup);
        }
		
		public IEnumerable<UserGroup> GetAllByFilter(Expression<Func<UserGroup, bool>> expression)
        {
            var userGroups = Context.Set<UserGroup>().Where(expression);
			return userGroups;
        }

        public UserManagementDbContext UserManagementContext
        {
            get { return Context as UserManagementDbContext; }
        }
    }
}
