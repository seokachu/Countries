import { getCountries } from "@/api/countries";
import { useQuery } from "@tanstack/react-query";

const useQueryData = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["country"],
    queryFn: getCountries,
  });

  return { data, isLoading };
};

export default useQueryData;
