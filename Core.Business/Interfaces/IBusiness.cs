using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Business.Interfaces
{
    public interface IBusiness<T> where T: new()
    {
        List<T> GetAll();
        T GetById(int Id);
        void Delete(int Id);
        void AddUpdate(T data);
        
    }
}
