using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Domain.Models
{
    public class News: BaseModel
    {
        public string Title { get; set; }
        public string Introduction { get; set; }
        public string Content { get; set; }
        public string MainImg { get; set; }
        public string SubImg { get; set; }
        public int Views { get; set; }
        public bool IsPopular { get; set; }
        public bool IsApproved { get; set; }
    }
}
