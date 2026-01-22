import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface ThanksTemplateProps {
  userName: string;
}

const ThanksTemp: React.FC<Readonly<ThanksTemplateProps>> = ({ userName }) => (
  <Html>
    <Head />
    <Preview>Welcome to Next Starter v2.</Preview>
    <Tailwind>
      <Body className="bg-gray-100">
        <Container className="mx-auto my-10 bg-white">
          <Section className="m-6">
            <Text className="mx-10 text-lg font-bold">Hi {userName} 👋 ,</Text>
            <Text className="mx-10 text-base">
              Welcome to Next Starter v2. Now you can build your idea faster.
              For support and updates, please contact the author.
            </Text>
            <Section className="my-5 text-center">
              <Text className="text-sm text-gray-600">
                Premium Template - Contact for Support
              </Text>
            </Section>
            <Text className="mx-10 text-base font-light">Best,</Text>
            <Text className="mx-10 text-base font-bold">Next Starter v2</Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default ThanksTemp;
