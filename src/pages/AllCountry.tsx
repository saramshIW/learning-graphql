import { gql, useQuery } from "@apollo/client";
import { Input, Row, Col, Typography, Button, Space, Spin, Alert } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const GET_ALL_COUNTRY = gql`
  query GetAllCountry {
    countries {
      name
      code
      __typename
    }
  }
`;

const AllCountry: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ALL_COUNTRY);
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
  return (
    <div style={{ background: "white", padding: "2rem 0rem" }}>
      <Typography.Title style={{ textAlign: "center" }} level={2}>
        {"Country List"}
      </Typography.Title>
      <hr />
      <br />
      <Row>
        {data.countries.map((item: any, index: number) => (
          <Col xs={{ span: 7, offset: 1 }} key={index + item.code}>
            <Link to={`/country/${item.code}`}>
              <Typography.Text>
                {item.name} - {item.code}
              </Typography.Text>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllCountry;
