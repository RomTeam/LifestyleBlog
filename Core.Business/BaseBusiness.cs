using Core.Business.Interfaces;
using Core.Common;
using Core.DAL;
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
            string modelName = typeof(T).BaseType.Name != "Object" ? typeof(T).BaseType.Name : typeof(T).Name;
            preStoreName = $"spp_{modelName}_";
        }

        public ApiResponse<List<T>> GetAll(ApiRequest apiRequest)
        {
            ParameterCollection paramIn = new ParameterCollection();
            paramIn.IsPaging(false);
            ApiResponse<List<T>> response = new ApiResponse<List<T>>()
            {
                Status = StatusCode.Success,
                Data = DataAccess.GetDataTable(preStoreName + "GetAll", paramIn).To<T>()
            };
            return response;
        }

        public ApiResponse<List<T>> GetAll(ApiRequest<string> apiRequest, out int totalRows)
        {
            ParameterCollection paramIn = new ParameterCollection();
            paramIn.AddPagingInfo(apiRequest.Paging);
            paramIn.Add("@searchText", apiRequest.Body);
            ApiResponse<List<T>> response = new ApiResponse<List<T>>()
            {
                Status = StatusCode.Success,
                Data = DataAccess.GetDataTable(preStoreName + "GetAll", paramIn, out totalRows).To<T>()
            };
            return response;

        }

        public ApiResponse<T> GetById(ApiRequest<int> apiRequest)
        {
            ParameterCollection paramIn = new ParameterCollection();
            paramIn.Add("@ID", apiRequest.Body);
            return new ApiResponse<T>()
            {
                Status = StatusCode.Success,
                Data = DataAccess.GetRecord(preStoreName + "GetByID", paramIn).To<T>()
            };
        }

        public ApiResponse<int> Delete(ApiRequest<int> apiRequest)
        {
            ParameterCollection paramIn = new ParameterCollection();
            paramIn.Add("@ID", apiRequest.Body);
            DataAccess.ExecuteNonQuery(preStoreName + "Delete", paramIn);
            return new ApiResponse<int>()
            {
                Status = StatusCode.Success,
                Data = apiRequest.Body
            };

        }
        public ApiResponse<string> AddUpdate(ApiRequest<T> apiRequest)
        {
            ParameterCollection paramIn = new ParameterCollection();
            IEnumerable<PropertyInfo> properties = typeof(T).GetProperties();

            foreach (var p in properties)
            {
                object[] attribute = p.GetCustomAttributes(typeof(IsParamAttribute), true);
                if (attribute.Length == 0)
                {
                    paramIn.Add("@" + p.Name, p.GetValue(apiRequest.Body));
                }
            }

            var id = DataAccess.ExecuteScalar(preStoreName + "AddUpdate", paramIn);
            return new ApiResponse<string>()
            {
                Status = StatusCode.Success,
                Data = id.ToString(),
            };
        }
    }
}
