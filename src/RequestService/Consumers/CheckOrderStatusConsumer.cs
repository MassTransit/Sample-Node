using System;
using System.Threading.Tasks;
using Contracts;
using MassTransit;

namespace RequestService.Consumers
{
    public class CheckOrderStatusConsumer :
        IConsumer<CheckOrderStatus>
    {
        public Task Consume(ConsumeContext<CheckOrderStatus> context)
        {
            var status = (Status) new Random().Next(4);

            return context.RespondAsync(new OrderStatus
            {
                OrderId = context.Message.OrderId,
                Status = status.ToString()
            });
        }
    }
}