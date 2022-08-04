import styled from 'styled-components';

export const Product = ({ name, price, inStock, img }) => {
  return (
    <Wrapper>
      <Img src={img} alt={name} />
      <Info>
        <Title>{name}</Title>
        <Div>
          <Span>in-stock: {inStock ? 'yes' : 'no'}</Span>
          <Span>Price: ${price}</Span>
        </Div>
      </Info>
    </Wrapper>
  );
};

const Wrapper = styled.figure`
  width: 100%;
  overflow: hidden;
  background-color: lightgray;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Span = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
`;
