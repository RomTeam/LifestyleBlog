using System;
using System.Collections.Generic;
using System.Runtime.Caching;
using System.Text;

namespace Core.Common
{
    public static class CacheManager
    {
        public const int DefaultCacheTime = 30;
        
        public static bool IsExistKey(string key)
        {
            MemoryCache memoryCache = MemoryCache.Default;
            return memoryCache.Contains(key);
        }
        public static object GetValue(string key)
        {
            MemoryCache memoryCache = MemoryCache.Default;
            if (memoryCache.Contains(key))
            {
                return MemoryCache.Default.Get(key);
            }
            return null;
        }

        
        public static void Add(string key, object value, int absExpiration = DefaultCacheTime)
        {
            MemoryCache.Default.Add(key, value, DateTimeOffset.Now.AddMinutes(absExpiration));
        }

        
        public static void Delete(string key)
        {
            MemoryCache memoryCache = MemoryCache.Default;
            if (memoryCache.Contains(key))
            {
                memoryCache.Remove(key);
            }
        }
    }
}
