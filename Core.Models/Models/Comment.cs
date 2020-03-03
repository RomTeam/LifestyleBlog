using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Domain.Models
{
    public class Comment:BaseModel
    {
        public string Content { get; set; }
        public int News { get; set; }
        public int Parent { get; set; }
        public bool IsApproved { get; set; }
    }
}
