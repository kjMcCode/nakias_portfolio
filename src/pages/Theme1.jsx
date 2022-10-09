import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import layersAndChalk from '../assets/LayersAndSymmetryChalk.jpg'
import hairLineShaddows from '../assets/hairLineShaddows.jpg'
import landscapeNakia from '../assets/landscapeNakia.jpg'
import MagRecruitment from '../assets/MagazineRecruitment.png'
import Notan from  '../assets/Notan.jpg'
import stillLife from  '../assets/stillLife.jpg'
import trueSelfie from  '../assets/trueSelfie.jpg'
import DassiesAndPoppiesReimagined from '../assets/DassiesAndPoppiesReimagined.jpg'
import VanGoghDasiesAndPoppies from  '../assets/VanGoghDasiesAndPoppies.jpg'



const Theme1 = () => {
    return (
        <Container>
          <Row className="my-5">
            <Col sm={4}>
                <Card>
                <Card.Img variant="top" src={layersAndChalk} />
                <Card.Body>
                <Card.Title>Image Title</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ullam recusandae a dolorem voluptate quas magni quasi tenetur corporis debitis dolore doloribus, odit, neque temporibus aspernatur distinctio deleniti minus voluptates.
                </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={4}>
            <Card>
                <Card.Img variant="top" src={landscapeNakia} />
                <Card.Body>
                <Card.Title>Image Title</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur eum blanditiis vel aliquid, odit debitis accusantium sed reprehenderit est, incidunt quo dolores modi dolorem. Perspiciatis fugit saepe commodi exercitationem suscipit.
                </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={4}>
            <Card>
                <Card.Img variant="top" src={hairLineShaddows} />
                <Card.Body>
                <Card.Title>Image Title</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolorem, hic unde ipsum veritatis asperiores at deserunt? Fugit ab quae pariatur consectetur itaque. Vitae, nisi id consequatur maxime earum dolores.
                </Card.Text>
                </Card.Body>
                </Card>
            </Col>
          </Row>
          <Row className="my-5">
            <Col sm={4}>
                <Card>
                <Card.Img variant="top" src={MagRecruitment} />
                <Card.Body>
                <Card.Title>Image Title</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laudantium excepturi nesciunt eligendi cum temporibus vel reiciendis, mollitia quasi illum, sequi sapiente maiores tenetur in possimus laboriosam ducimus iusto quas!
                </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={4}>
            <Card>
                <Card.Img variant="top" src={Notan} />
                <Card.Body>
                <Card.Title>Image Title</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, error. Itaque corrupti a delectus obcaecati sint non perferendis optio harum culpa, qui iusto quibusdam atque fuga eaque tempora quaerat eveniet!
                </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={4}>
            <Card>
                <Card.Img variant="top" src={stillLife} />
                <Card.Body>
                <Card.Title>Image Title</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta laudantium veniam harum, adipisci voluptatibus, est atque laboriosam excepturi optio illo error laborum a ab rerum, exercitationem rem dicta expedita dolores.
                </Card.Text>
                </Card.Body>
                </Card>
            </Col>
          </Row>
          <Row className="my-5">
            <Col sm={4}>
                <Card>
                <Card.Img variant="top" src={trueSelfie} />
                <Card.Body>
                <Card.Title>Image Title</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laudantium excepturi nesciunt eligendi cum temporibus vel reiciendis, mollitia quasi illum, sequi sapiente maiores tenetur in possimus laboriosam ducimus iusto quas!
                </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={4}>
                <Card>
                <Card.Img variant="top" src={VanGoghDasiesAndPoppies} />
                <Card.Body>
                <Card.Title>Image Title</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, error. Itaque corrupti a delectus obcaecati sint non perferendis optio harum culpa, qui iusto quibusdam atque fuga eaque tempora quaerat eveniet!
                </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={4}>
            <Card>
                <Card.Img variant="top" src={DassiesAndPoppiesReimagined} />
                <Card.Body>
                <Card.Title>Image Title</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, error. Itaque corrupti a delectus obcaecati sint non perferendis optio harum culpa, qui iusto quibusdam atque fuga eaque tempora quaerat eveniet!
                </Card.Text>
                </Card.Body>
                </Card>
            </Col>

          </Row>

        </Container>
      );
}

export default Theme1