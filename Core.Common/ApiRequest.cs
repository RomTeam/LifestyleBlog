using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Common
{
    public class ApiRequest<T> 
    {
        public Header Header { get; set; }
        public T Body { get; set; }
        public Pagination Paging { get; set; }
    }

    public class ApiRequest
    {
        public Header Header { get; set; }
        public Pagination Paging { get; set; }
    }

    public class Header
    {
        public string Token { get; set; }
    }

}
