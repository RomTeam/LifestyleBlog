using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Common
{
    public enum StatusCode
    {
        Success,
        Fail
    }
    public class ApiResponse<T>
    {
        public StatusCode Status { get; set; }
        public T Data { get; set; }
    }

    public class ApiResponse
    {
        public StatusCode Status { get; set; }
    }
}
