import { Card, Col, Row, Typography } from "antd";
import React from "react";

export type CountryCardProp = {
  name?: string;
  code?: string;
  continent?: {
    name?: string;
  };
  languages?: {
    name?: string;
  }[];
  currency?: string;
  emoji?: string;
  native?: string;
  phone?: string;
  capital?: string;
};
const CountryDetailCard = (data: CountryCardProp) => {
  return (
    <Card
      style={{ fontSize: "1.2rem" }}
      title={
        <Typography.Title level={2}>
          {`${data?.name} - ${data?.code} ${data?.emoji}`}
        </Typography.Title>
      }
    >
      <Row>
        <Col span={12}>
          <Typography.Text strong>Capital: {data?.capital}</Typography.Text>
        </Col>
        <Col span={12}>
          <Typography.Text type="success">
            Currency: {data?.currency}
          </Typography.Text>
        </Col>
        <Col span={12}>
          <Typography.Text>
            {"Phone(code)"}: {data?.phone}
          </Typography.Text>
        </Col>
        <Col span={12}>
          <Typography.Text>Continent: {data?.continent?.name}</Typography.Text>
        </Col>
        <Col span={12}>
          <Typography.Text>Native: {data?.native}</Typography.Text>
        </Col>
        <Col span={12}>
          <Typography.Text>
            Languages:
            {data?.languages?.map(
              (item: { name?: string }, index: number) => ` ${item.name} `
            )}
          </Typography.Text>
        </Col>
      </Row>
    </Card>
  );
};

export default CountryDetailCard;
