import { gql, useQuery } from '@apollo/client';
import { Input, Row, Col, Typography, Button, Alert, Spin, Card } from 'antd';
import React, { FormEvent, FormEventHandler } from 'react';
import CountryDetailCard, {
  CountryCardProp,
} from '../components/CountryDetailCard';

const GET_A_LANGUAGE = gql`
  query GET_LANGUAGE($languageCode: ID!) {
    language: language(code: $languageCode) {
      name
      code
      native
    }
  }
`;

const LanguageSearch = () => {
  const [searchValue, setSearchValue] = React.useState<string | null>();
  const [userInput, setUserInput] = React.useState<string | null>();

  const queryData = useQuery(GET_A_LANGUAGE, {
    variables: { languageCode: searchValue },
  });

  React.useEffect(() => {
    queryData.refetch({ languageCode: searchValue?.toLocaleLowerCase() });
  }, [searchValue]);

  const searchHandler = (e: FormEvent) => {
    e?.preventDefault();
    setSearchValue(userInput?.toLocaleLowerCase());
  };

  return (
    <>
      <form onSubmit={searchHandler}>
        <Row justify='center'>
          <Col span={12}>
            <Input
              onChange={(e) => setUserInput(e.target.value)}
              size='large'
              placeholder='Search Language by its code'
            />
          </Col>
          <Col>
            <Button size='large' htmlType='submit'>
              Search
            </Button>
          </Col>
        </Row>
        {searchValue && (
          <Row style={{ margin: ' 1rem 2rem' }} justify='center'>
            <Typography.Title level={5}>
              Search results for "{searchValue}"
            </Typography.Title>
          </Row>
        )}
      </form>
      <Row justify='center'>
        {searchValue && searchValue != '' && <LanguageResult {...queryData} />}
      </Row>
    </>
  );
};

export default LanguageSearch;

const LanguageResult = ({
  loading,
  error,
  data,
}: {
  loading?: any;
  error?: any;
  data?: any;
}) => {
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
  const language: { name: string; code: string; native: string } =
    data.language;

  if (!data?.language)
    return (
      <Alert
        className='center'
        message='No Results Found'
        type='warning'
        showIcon
      />
    );
  return (
    <Card
      title={
        <Typography.Title
          level={3}
        >{`${language?.name} - ${language?.code}`}</Typography.Title>
      }
    >
      <Typography.Title level={3}>Native: {language?.native}</Typography.Title>
    </Card>
  );
};
