import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import trueSelfie from  '../assets/trueSelfie.jpg'

const AboutMe = () => {
    return (
        <Container>
        <Row className="my-5">
            <Col sm={12}>
            <Image align="center" rounded src={trueSelfie} width={300} height={300} />
            </Col>
        </Row>
        <Row className="my-5">
            <Col md={{ span: 6, offset: 3 }}>
                <Card>
                <Card.Body>
                <Card.Title>About Me</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ullam recusandae a dolorem voluptate quas magni quasi tenetur corporis debitis dolore doloribus, odit, neque temporibus aspernatur distinctio deleniti minus voluptates. <br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ullam recusandae a dolorem voluptate quas magni quasi tenetur corporis debitis dolore doloribus, odit, neque temporibus aspernatur distinctio deleniti minus voluptates.<br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ullam recusandae a dolorem voluptate quas magni quasi tenetur corporis debitis dolore doloribus, odit, neque temporibus aspernatur distinctio deleniti minus voluptates.<br /><br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ullam recusandae a dolorem voluptate quas magni quasi tenetur corporis debitis dolore doloribus, odit, neque temporibus aspernatur distinctio deleniti minus voluptates.
                </Card.Text>
                </Card.Body>
                </Card>
            </Col>
          </Row>
        </Container>
    )
}

export default AboutMe