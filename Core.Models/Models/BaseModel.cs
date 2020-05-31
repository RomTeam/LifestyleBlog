using Core.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Domain.Models
{
    public class BaseModel
    {
        public int ID { get; set; }
        public int CreatedBy { get; set; }
        [IsParam(IsAddParam = false)]
        public DateTime CreatedDate { get; set; }
        public bool IsShow { get; set; }
        public bool IsDelete { get; set; }
    }
}
