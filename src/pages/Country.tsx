import { gql, useQuery } from "@apollo/client";
import { Input, Row, Col, Typography, Button, Space, Alert, Spin } from "antd";
import React, { FormEvent, FormEventHandler } from "react";
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

const Country = () => {
  const [searchValue, setSearchValue] = React.useState<string | null>();
  const [userInput, setUserInput] = React.useState<string | null>();
  const queryData = useQuery(GET_A_COUNTRY, {
    variables: { countryCode: searchValue },
  });
  const searchHandler = (e: FormEvent) => {
    e?.preventDefault();
    setSearchValue(userInput);
    queryData.refetch({ countryCode: searchValue });
  };
  return (
    <>
      <form onSubmit={searchHandler}>
        <Row justify="center">
          <Col span={12}>
            <Input
              onChange={(e) => setUserInput(e.target.value)}
              size="large"
              placeholder="Search country by its code"
            />
          </Col>
          <Col>
            <Button size="large" htmlType="submit">
              Search
            </Button>
          </Col>
        </Row>
        {searchValue && (
          <Row style={{ margin: " 1rem 2rem" }} justify="center">
            <Typography.Title level={5}>
              Search results for "{searchValue}"
            </Typography.Title>
          </Row>
        )}
      </form>
      <Row justify="center">
        <CountryResult {...queryData} />
      </Row>
    </>
  );
};

export default Country;

const CountryResult = ({
  loading,
  error,
  data,
}: {
  loading?: any;
  error?: any;
  data?: any;
}) => {
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
  return (
    <div>
      <CountryDetailCard {...country} />
    </div>
  );
};
