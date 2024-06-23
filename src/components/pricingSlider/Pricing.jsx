import React from 'react';
import styled from 'styled-components';

// Sample shirt data
const shirts = [
  { 
    name: "Light Beige Half Sleeves Printed Shirts For Men", 
    category: "Urban Shirts", 
    price: "₹849", 
    originalPrice: "₹2149", 
    discount: "60% Off", 
    link: "/light-beige-shirt",
    img: "https://via.placeholder.com/370x420.png?text=Light+Beige+Shirt" 
  },
  { 
    name: "Dark Grey Sulphur Urban Shirt for Men", 
    category: "Urban Shirts", 
    price: "₹998", 
    originalPrice: "₹2499", 
    discount: "60% Off", 
    link: "/dark-grey-shirt",
    img: "https://via.placeholder.com/370x420.png?text=Dark+Grey+Shirt" 
  },
  { 
    name: "Brown Camo Print Urban Shirt for Men", 
    category: "Urban Shirts", 
    price: "₹1399", 
    originalPrice: "₹2999", 
    discount: "53% Off", 
    link: "/brown-camo-shirt",
    img: "https://via.placeholder.com/370x420.png?text=Brown+Camo+Shirt" 
  },
  { 
    name: "Beige Floral Printed Shirt For Men", 
    category: "Urban Shirts", 
    price: "₹799", 
    originalPrice: "₹1999", 
    discount: "60% Off", 
    link: "/beige-floral-shirt",
    img: "https://via.placeholder.com/370x420.png?text=Beige+Floral+Shirt" 
  },
  { 
    name: "Midnight Blue Corduroy Shirt For Men", 
    category: "Urban Shirts", 
    price: "₹1199", 
    originalPrice: "₹2999", 
    discount: "60% Off", 
    link: "/midnight-blue-shirt",
    img: "https://via.placeholder.com/370x420.png?text=Midnight+Blue+Shirt" 
  },
  { 
    name: "White and Brown Striped Urban Shirt For Men", 
    category: "Urban Shirts", 
    price: "₹1199", 
    originalPrice: "₹2999", 
    discount: "60% Off", 
    link: "/white-brown-striped-shirt",
    img: "https://via.placeholder.com/370x420.png?text=White+Brown+Striped+Shirt" 
  },
  { 
    name: "Mauve Tie and Dye Printed Urban Shirt", 
    category: "Urban Shirts", 
    price: "₹999", 
    originalPrice: "₹2499", 
    discount: "60% Off", 
    link: "/mauve-tie-dye-shirt",
    img: "https://via.placeholder.com/370x420.png?text=Mauve+Tie+Dye+Shirt" 
  },
  { 
    name: "Pacific Blue Over Dyed Shirt For Men", 
    category: "Urban Shirts", 
    price: "₹1199", 
    originalPrice: "₹2999", 
    discount: "60% Off", 
    link: "/pacific-blue-shirt",
    img: "https://via.placeholder.com/370x420.png?text=Pacific+Blue+Shirt" 
  },
  { 
    name: "Seafoam Green Cotton Shirt for Men", 
    category: "Urban Shirts", 
    price: "₹998", 
    originalPrice: "₹2499", 
    discount: "60% Off", 
    link: "/seafoam-green-shirt",
    img: "https://via.placeholder.com/370x420.png?text=Seafoam+Green+Shirt" 
  },
  { 
    name: "Sand Brown Half Sleeve Waffle Shirt for Men", 
    category: "Urban Shirts", 
    price: "₹899", 
    originalPrice: "₹2249", 
    discount: "60% Off", 
    link: "/sand-brown-shirt",
    img: "https://via.placeholder.com/370x420.png?text=Sand+Brown+Shirt" 
  },
  { 
    name: "Grey Plaid Shirt for Men", 
    category: "Urban Shirts", 
    price: "₹799", 
    originalPrice: "₹2499", 
    discount: "68% Off", 
    link: "/grey-plaid-shirt",
    img: "https://via.placeholder.com/370x420.png?text=Grey+Plaid+Shirt" 
  },
  { 
    name: "Grey Plaid Shirt for Men", 
    category: "Urban Shirts", 
    price: "₹799", 
    originalPrice: "₹2499", 
    discount: "68% Off", 
    link: "/grey-plaid-shirt",
    img: "https://via.placeholder.com/370x420.png?text=Grey+Plaid+Shirt" 
  }
];

// Styled components for the Pricing component
const Section = styled.section`
  padding: 4rem 0;
  @media (max-width: 1440px) {
    padding: 7rem 0;
  }
`;

const Container = styled.div`
  max-width: 124rem;
  padding: 0 1rem;
  margin: 0 auto;
  text-align: center;
`;

const SectionSubheading = styled.h3`
  color: #555;
`;

const SectionHeading = styled.h1`
  font-size: 3rem;
  color: #ec994b;
  padding: 2rem 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const Card = styled.a`
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  transition: transform 0.2s;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const Content = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ActualPrice = styled.small`
  font-size: 14px;
  text-decoration: line-through;
  color: rgba(0, 0, 0, 0.5);
`;

const DiscountText = styled.strong`
  color: #04ce00;
  font-size: 14px;
`;

const ProductName = styled.h2`
  font-size: 18px;
  color: #222;
  font-weight: 600;
  margin: 0;
`;

const CategoryProductSub = styled.span`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
`;

const Pricing = () => (
  <Section id="trending">
    <Container>
      <SectionSubheading>- Explore Our Collection -</SectionSubheading>
      <SectionHeading>Trending Shirts</SectionHeading>
      <Grid>
        {shirts.map((shirt, index) => (
          <Card key={index} href={shirt.link}>
            <Image src={shirt.img} alt={shirt.name} />
            <Content>
              <div>
                <ProductName>{shirt.name}</ProductName>
                <CategoryProductSub>{shirt.category}</CategoryProductSub>
              </div>
              <Price>
                <div>
                  <span>{shirt.price}</span>
                  <ActualPrice>{shirt.originalPrice}</ActualPrice>
                </div>
                <DiscountText>{shirt.discount}</DiscountText>
              </Price>
            </Content>
          </Card>
        ))}
      </Grid>
    </Container>
  </Section>
);

export default Pricing;
