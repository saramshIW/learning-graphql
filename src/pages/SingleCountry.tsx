import { gql, useQuery } from "@apollo/client";
import { Spin, Alert } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import CountryDetailCard, {
  CountryCardProp,
} from "../components/CountryDetailCard";

const GET_A_COUNTRY = gql`
  query GET_COUNTRY($countryCode: ID!) {
    country: country(code: $countryCode) {
      name
      code
      continent {
        name
      }
      languages {
        name
      }
      currency
      emoji
      emojiU
      native
      phone
      capital
    }
  }
`;

const SingleCountry = () => {
  const { countryCode } = useParams();
  console.log(countryCode);
  const { loading, error, data } = useQuery(GET_A_COUNTRY, {
    variables: { countryCode },
  });
  if (loading) return <Spin className="center" size="large" />;
  if (error)
    return (
      <Alert
        className="center"
        message="Error Occurred"
        type="error"
        showIcon
      />
    );
  const country: CountryCardProp = data.country;
  console.log(country);
  return (
    <div>
      <CountryDetailCard {...country} />
    </div>
  );
};

export default SingleCountry;
