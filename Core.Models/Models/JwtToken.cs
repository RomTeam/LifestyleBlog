using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Domain.Models
{
    public class JwtToken
    {
        [JsonProperty(PropertyName ="access_token")]
        public string Token { get; set; }
        [JsonProperty(PropertyName = "expirend_in")]
        public int Expired { get; set; }
        [JsonProperty(PropertyName = "token_type")]
        public string TokenType { get; set; }
        [JsonProperty(PropertyName = "refresh_token")]
        public string RefreshToken { get; set; }
    }
}
