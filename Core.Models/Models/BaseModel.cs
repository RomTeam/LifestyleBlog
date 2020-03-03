using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Domain.Models
{
    public class BaseModel
    {
        public int ID { get; set; }
        public int CreatedBy { get; set; }
        public DateTime CreatedDate { 
            get {
                return DateTime.Now;
            } 
        }
        public bool IsShow { get; set; }
        public bool IsDelete { get; set; }
    }
}
