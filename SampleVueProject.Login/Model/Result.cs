using System;
namespace SampleVueProject.Login.Model
{
    public class Result<T>
    {

        public DateTime RequestTime { get; set; }
        public DateTime ResponseTime { get; set; }
        public bool IsSuccess { get; set; }
        public string RequestId { get; set; }
        public T Data { get; set; }
              
    }

    public class Error
    {
        public string ErrorCode { get; set; }
        public string ErrorMessage { get; set; }

    }
}
