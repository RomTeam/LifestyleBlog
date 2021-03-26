using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.Interfaces
{
    public interface INews<T> : IBusiness<T> where T : new()
    {
    }
}
