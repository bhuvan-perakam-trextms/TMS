using AutoMapper;

namespace CashModuleApi
{
    public class TrexProfile: Profile
    {
        public TrexProfile()
        {
            CreateMap<Models.User, Domain.User>();
            CreateMap<Models.Feature, Domain.Feature>();
            CreateMap<Models.Module, Domain.Module>();
        }
    }
}
