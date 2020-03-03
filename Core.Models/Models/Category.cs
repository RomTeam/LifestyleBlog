using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Domain.Models
{
    public class Category:BaseModel
    {
        public string Name { get; set; }
        public string Type { get; set; }
        public int Parent { get; set; }
        public string Url { get; set; }
        public int Order { get; set; }

    }
}
