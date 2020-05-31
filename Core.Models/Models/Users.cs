using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Domain.Models
{
    public class Users:BaseModel 
    {
        public string FullName { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public string Role { get; set; }
        public string Avatar { get; set; }
        public bool IsActive { get; set; }
    }
}
