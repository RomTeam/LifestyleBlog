using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Domain.Models
{
    public class WebConfig : BaseModel
    {
        public string Facebook { get; set; }
        public string Instagram { get; set; }
        public string Twiter { get; set; }
        public string GooglePlus { get; set; }
        public string Phone { get; set; }
        public string Mail { get; set; }
        public string Fax { get; set; }
        public string Office { get; set; }
        public string Map { get; set; }
    }
}
