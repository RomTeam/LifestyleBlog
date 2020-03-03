using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Domain.Models
{
    public class Media:BaseModel
    {
        public string Image { get; set; }
        public string Type { get; set; }
        public string Video { get; set; }
        public int News { get; set; }
        public string Quocte { get; set; }
        public string Content { get; set; }
        public string Url { get; set; }
        public string Audio { get; set; }
    }
}
