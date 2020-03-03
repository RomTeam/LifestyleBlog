using Core.Business.Interfaces;
using Core.Common;
using Core.DAL;
using System;
using System.Collections.Generic;
using System.Reflection;

namespace Core.Business
{
    public class BaseBusiness<T> : IBusiness<T> where T : new()
    {
        protected DataAccess DataAccess;
        private string preStoreName;
        public BaseBusiness()
        {
            DataAccess = new DataAccess();
            preStoreName = $"spp_{typeof(T).Name}_";
        }

        public List<T> GetAll()
        {
            ParameterCollection paramIn = new ParameterCollection();
            return DataAccess.GetDataTable(preStoreName + "GetAll", paramIn).To<T>();
        }
        public T GetById(int Id)
        {
            ParameterCollection paramIn = new ParameterCollection();
            paramIn.Add("@ID", Id);
            return DataAccess.GetRecord(preStoreName + "GetByID", paramIn).To<T>();
        }
        public void Delete(int Id)
        {
            ParameterCollection paramIn = new ParameterCollection();
            paramIn.Add("@ID", Id);
            DataAccess.ExecuteNonQuery(preStoreName + "Delete", paramIn);
        }
        public void AddUpdate(T data)
        {
            ParameterCollection paramIn = new ParameterCollection();
            IEnumerable<PropertyInfo> properties = typeof(T).GetProperties();
            foreach (var p in properties)
            {
                paramIn.Add("@" + p.Name, p.GetValue(data));
            }

            DataAccess.ExecuteNonQuery(preStoreName + "AddUpdate", paramIn);
        }
    }
}
