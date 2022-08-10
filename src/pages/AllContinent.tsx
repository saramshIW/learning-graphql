import { gql, useQuery } from '@apollo/client';
import { Row, Col, Typography, Spin, Alert } from 'antd';
import React from 'react';
import style from './styles/AllCountry.module.scss';

const GET_ALL_LANGUAGE = gql`
  query GetAllContinents {
    continents {
      name
      code
    }
  }
`;

const AllContinent: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ALL_LANGUAGE);
  if (loading) return <Spin className='center' size='large' />;
  if (error)
    return (
      <Alert
        className='center'
        message='Error Occurred'
        type='error'
        showIcon
      />
    );
  return (
    <div style={{ background: 'white', padding: '2rem 0rem' }}>
      <Typography.Title style={{ textAlign: 'center' }} level={2}>
        {'Language List'}
      </Typography.Title>
      <hr />
      <br />
      <Row>
        {data.continents.map((item: any, index: number) => (
          <Col
            xs={{ span: 22, offset: 1 }}
            sm={{ span: 11, offset: 1 }}
            lg={{ span: 7, offset: 1 }}
            key={index + item.code}
          >
            <Typography.Text className={style['internal-link']}>
              {item.name} - {item.code}
            </Typography.Text>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllContinent;
