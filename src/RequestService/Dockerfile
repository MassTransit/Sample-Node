FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["RequestService.csproj", "RequestService/"]
RUN dotnet restore "RequestService/RequestService.csproj"

COPY . RequestService/.
RUN dotnet publish -c Release -o /app RequestService/RequestService.csproj 

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS publish
WORKDIR /app
COPY --from=build /app ./
ENTRYPOINT ["dotnet", "RequestService.dll"]