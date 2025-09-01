using AutoMapper;


namespace CashModuleApi.Mappings
{
    public class TrexProfile : Profile
    {
        public TrexProfile()
        {
            CreateMap<Domain.User, Models.User>();
        }
    }
} 