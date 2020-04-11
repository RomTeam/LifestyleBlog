using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Common
{
    public class IsParamAttribute : Attribute
    {
        public bool IsAddParam { get; set; }
    }
}
