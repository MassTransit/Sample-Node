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
            return context.RespondAsync(new OrderStatus()
            {
                OrderId = context.Message.OrderId,
                Status = "Pending"
            });
        }
    }
}