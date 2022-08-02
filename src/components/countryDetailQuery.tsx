import { gql, useQuery } from "@apollo/client";
import React from "react";

const CountryDetailQuery = ({ countryName }: { countryName: string }) => {
  const GET_COUNTRY_INFO = gql`
    query GetCountry {
      country(code: "${countryName}") {
        __typename
        name
        capital
        emoji
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_COUNTRY_INFO);

  if (loading) return <p className="">{JSON.stringify("loading")}</p>;
  if (error) return <p className="">{JSON.stringify(error)}</p>;

  return <div>{data && <p className="">{JSON.stringify(data)}</p>}</div>;
};
export default CountryDetailQuery;
