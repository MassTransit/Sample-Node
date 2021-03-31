namespace Contracts
{
    public record OrderStatus
    {
        public string OrderId { get; init; }
        public string Status { get; init; }

    }
}