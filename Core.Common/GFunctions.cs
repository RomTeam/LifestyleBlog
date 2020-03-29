using System;
using System.Collections.Generic;
using System.Data;
using System.Reflection;
using System.Text;

namespace Core.Common
{
    public static class GFunctions
    {
        public static bool IsNull(this object obj)
        {
            if (obj == DBNull.Value)
                return false;
            return true;
        }
        public static bool HasData(this DataTable dt)
        {
            if (dt.IsNull() && dt.Rows.Count > 0)
                return true;
            return false;
        }

        public static T To<T>(this DataRow dr) where T : new()
        {
            if (dr != null)
            {
                T t = new T();
                IEnumerable<PropertyInfo> properties = typeof(T).GetProperties();
                foreach (var p in properties)
                {
                    if (dr.Table.Columns.Contains(p.Name))
                    {
                        object obj = dr[p.Name];
                        if (obj is DBNull)
                            obj = null;
                        else
                        {

                            if (p.PropertyType.IsGenericType && p.PropertyType.GetGenericTypeDefinition().Equals(typeof(Nullable<>)))
                                obj = Convert.ChangeType(obj, Nullable.GetUnderlyingType(p.PropertyType));
                            else
                                obj = Convert.ChangeType(obj, p.PropertyType);
                        }
                        if(p.CanWrite)
                        {
                            p.SetValue(t, obj, null);
                        }
                    }
                }
                return t;
            }
            return default(T);

        }

        public static List<T> To<T>(this DataTable dt) where T : new()
        {
            List<T> ts = new List<T>();
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                ts.Add(dt.Rows[i].To<T>());
            }
            return ts;
        }
    }
}
