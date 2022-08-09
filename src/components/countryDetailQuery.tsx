import { gql, useQuery } from "@apollo/client";
import React, { ReactNode } from "react";

const CountryDetailQuery = ({ countryName }: { countryName: string }) => {
  const GET_COUNTRY_INFO = gql`
    query GetCountry($countrycode: ID!) {
      data: country(code: $countrycode) {
        __typename
        ...NameParts
      }
    }
    fragment NameParts on Country {
      name
      capital
      emoji
      currency
    }
  `;
  const { loading, error, data } = useQuery(GET_COUNTRY_INFO, {
    variables: { countrycode: countryName.toUpperCase() },
  });

  if (loading) return <p className="">{JSON.stringify("loading")}</p>;
  if (error) return <p className="">{JSON.stringify(error)}</p>;
  return (
    <div>
      <h2>Country Card:</h2>
      {data && data?.data && (
        <CountryDetail
          name={data.data.name}
          capital={data.data.capital}
          emoji={data.data.emoji}
          currency={data.data.currency}
        />
      )}
    </div>
  );
};
export default CountryDetailQuery;

const CountryDetail = ({
  name,
  capital,
  emoji,
  currency,
}: {
  name: string;
  capital: string;
  emoji: string;
  currency: string;
}) => (
  <div className="border p-4 bg-light">
    <h2>
      {name}
      {emoji}
    </h2>
    <p>
      <b>Capital: {capital}</b>
    </p>
    <p>
      <i>
        <q>Currency:{currency}</q>
      </i>
    </p>
  </div>
);
