
using Microsoft.EntityFrameworkCore;
using UserManagement.Service.Repository;
using UserManagement.DataLayer.Database;
using UserManagement.DomainClasses.Entities.Authentication;
using UserManagement.Service.IRepository.Authentication;

namespace UserManagement.Service.IRepository.Authentication
{
    public interface IGroupRepository : IRepository<Group>
    {
        void Update(Group group);
    }
}

namespace UserManagement.Service.Repository.Authentication
{
    public class GroupRepository : Repository<Group>, IGroupRepository
    {
        public GroupRepository(UserManagementDbContext context) : base(context)
        {

        }
		
        public void Update(Group group)
        {
            Group selectedGroup = UserManagementContext.Groups.Find(group.Id);
            selectedGroup.Title = group.Title;

        }

        public UserManagementDbContext UserManagementContext
        {
            get { return Context as UserManagementDbContext; }
        }
    }
}
