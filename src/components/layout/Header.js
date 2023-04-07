import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export default function Header(){
    return(
        <>
        <Container  fluid>
            <Row>
                <Col md={12}>
                    <Link href="/service/dd" as="ll">dd</Link>
                    <Link href="/product">Product</Link>
                    <Link href="/service" className="mx-5">Service</Link>
                </Col>
            </Row>
        </Container>
        </>
    )
}