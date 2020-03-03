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
    }
    public class ParameterCollection : CollectionBase
    {
        public ParameterCollection Add(string Name, object Value)
        {
            Parameter param = new Parameter()
            {
                Name = Name,
                Value = Value,

            };
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
}
