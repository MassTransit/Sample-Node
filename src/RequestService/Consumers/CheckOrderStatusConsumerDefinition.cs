using GreenPipes;
using MassTransit;
using MassTransit.ConsumeConfigurators;
using MassTransit.Definition;

namespace RequestService.Consumers
{
    public class CheckOrderStatusConsumerDefinition :
        ConsumerDefinition<CheckOrderStatusConsumer>
    {
        public CheckOrderStatusConsumerDefinition()
        {
            EndpointName = "order-status";
        }

        protected override void ConfigureConsumer(IReceiveEndpointConfigurator endpointConfigurator,
            IConsumerConfigurator<CheckOrderStatusConsumer> consumerConfigurator)
        {
            endpointConfigurator.UseMessageRetry(r => r.Intervals(500, 1000));
        }
    }
}