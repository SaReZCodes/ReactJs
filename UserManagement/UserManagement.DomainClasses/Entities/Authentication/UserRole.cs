namespace UserManagement.DomainClasses.Entities.Authentication
{
    public class UserRole
    {
        public int UserId { get; set; }
        public int RoleId { get; set; }

        public virtual User? User { get; set; }
        public virtual Role? Role { get; set; }
    }
}