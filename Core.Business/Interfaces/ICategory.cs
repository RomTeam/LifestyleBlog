using Core.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.Interfaces
{
    public interface ICategory<T> : IBusiness<T> where T : new()
    {
    }
}
