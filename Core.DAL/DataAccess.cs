using Core.Common;
using Microsoft.Extensions.Configuration;
using System;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Runtime.Caching;

namespace Core.DAL
{
    public class DataAccess
    {
        string connString = string.Empty;
        public DataAccess()
        {
            if (!CacheManager.IsExistKey(Constants.ConnnectionString))
            {
                IConfigurationBuilder builder = new ConfigurationBuilder();
                builder.AddJsonFile(Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json"));
                var root = builder.Build();
                CacheManager.Add(Constants.ConnnectionString, root.GetConnectionString("connectionString"));
            }
            connString = CacheManager.GetValue(Constants.ConnnectionString).ToString();
        }
        public DataTable GetDataTable(string spa, ParameterCollection parameters, out int totalRows)
        {
            using (SqlConnection conn = new SqlConnection(connString))
            {
                SqlCommand com = new SqlCommand(spa, conn);
                com.CommandType = CommandType.StoredProcedure;
                foreach (Parameter item in parameters)
                {
                    if (item.IsOutput)
                        com.Parameters.AddWithValue(item.Name, item.Value).Direction = ParameterDirection.Output;
                    else
                        com.Parameters.AddWithValue(item.Name, item.Value);

                }
                conn.Open();
                DataTable dt = new DataTable();
                dt.Load(com.ExecuteReader());
                totalRows = Convert.ToInt32(com.Parameters["@TotalRow"].Value);
                return dt;
            }
        }

        public DataTable GetDataTable(string spa, ParameterCollection parameters)
        {
            using (SqlConnection conn = new SqlConnection(connString))
            {
                SqlCommand com = new SqlCommand(spa, conn);
                com.CommandType = CommandType.StoredProcedure;
                foreach (Parameter item in parameters)
                {
                    if (item.IsOutput)
                        com.Parameters.AddWithValue(item.Name, item.Value).Direction = ParameterDirection.Output;
                    else
                        com.Parameters.AddWithValue(item.Name, item.Value);

                }
                conn.Open();
                DataTable dt = new DataTable();
                dt.Load(com.ExecuteReader());
                return dt;
            }
        }

        public DataRow GetRecord(string spa, ParameterCollection parameters)
        {
            using (SqlConnection conn = new SqlConnection(connString))
            {
                SqlCommand com = new SqlCommand(spa, conn);
                com.CommandType = CommandType.StoredProcedure;
                foreach (Parameter item in parameters)
                {
                    com.Parameters.AddWithValue(item.Name, item.Value);
                }
                conn.Open();
                DataTable dt = new DataTable();
                dt.Load(com.ExecuteReader());
                if (dt.HasData())
                    return dt.Rows[0];
                return null;
            }
        }

        public void ExecuteNonQuery(string spa, ParameterCollection parameters)
        {
            using (SqlConnection conn = new SqlConnection(connString))
            {
                SqlCommand com = new SqlCommand(spa, conn);
                com.CommandType = CommandType.StoredProcedure;
                foreach (Parameter item in parameters)
                {
                    com.Parameters.AddWithValue(item.Name, item.Value);
                }
                conn.Open();
                com.ExecuteNonQuery();
            }
        }

        public object ExecuteScalar(string spa, ParameterCollection parameters)
        {
            using (SqlConnection conn = new SqlConnection(connString))
            {
                SqlCommand com = new SqlCommand(spa, conn);
                com.CommandType = CommandType.StoredProcedure;
                foreach (Parameter item in parameters)
                {
                    com.Parameters.AddWithValue(item.Name, item.Value);
                }
                conn.Open();
                return com.ExecuteScalar();
            }
        }
    }
}
