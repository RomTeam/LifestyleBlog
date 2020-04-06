using System;
using System.Collections;
namespace Core.Common
{
    public class Parameter
    {
        public string Name { get; set; }
        public object Value { get; set; }
        public object Type { get; set; }
        public bool IsOutput { get; set; }

        public Parameter() { }
        public Parameter(string name, object value)
        {
            Name = name;
            Value = value;
        }
        public Parameter(string name, object value, bool isOutput = false)
        {
            Name = name;
            Value = value;
            IsOutput = isOutput;
        }
    }
    public class ParameterCollection : CollectionBase
    {
        public ParameterCollection IsPaging(bool isPaging)
        {
            List.Add(new Parameter("@IsPaging", isPaging));
            return this;
        }
        public ParameterCollection AddPagingInfo(Pagination paging)
        {
            List.Add(new Parameter("@PageNum", paging.PageNum));
            List.Add(new Parameter("@PageSize", paging.PageSize));
            List.Add(new Parameter("@StrOrder", paging.StrOrder));
            List.Add(new Parameter("@TotalRow", 0, true));
            return this;
        }
        public ParameterCollection Add(string Name, object Value)
        {
            Parameter param = new Parameter(Name, Value);
            List.Add(param);
            return this;
        }
        public ParameterCollection Add(string Name, object Value, object Type)
        {
            Parameter param = new Parameter()
            {
                Name = Name,
                Value = Value,
                Type = Type
            };

            List.Add(param);
            return this;
        }

        public ParameterCollection Add(string Name, object Value, object Type, bool IsOutput)
        {
            Parameter param = new Parameter()
            {
                Name = Name,
                Value = Value,
                Type = Type,
                IsOutput = IsOutput
            };

            List.Add(param);
            return this;
        }
    }

    public class Pagination
    {
        public int PageNum { get; set; }
        public int PageSize { get; set; }
        public string StrOrder { get; set; }
        public int TotalRows { get; set; }
        public string SearchText { get; set; }
    }
}
