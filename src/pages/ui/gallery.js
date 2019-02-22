import React, { Component } from 'react';
import {Row, Col, Card, Switch} from 'antd'

const CardMeta = Card.Meta;
const img = [
    ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg'],
    ['6.jpg','7.jpg','8.jpg','9.jpg','10.jpg'],
    ['11.jpg','12.jpg','13.jpg','14.jpg','15.jpg'],
];

class Gallery extends Component {

    state = {
        rowFirst: true,
        imgList: []
    }

    componentWillMount () {
        let {imgList} = this.state;
        imgList[0] = img.map( data => data.map( (item, index) => 
              (
                <Col
                    md={((index + 1)%5 === 0) ? 4:5}
                    key={index}
                >
                    <Card
                        style={{marginBottom:'20px'}}
                        cover={<img src={item} />}
                    >
                        <CardMeta
                            title={item}
                            description='那是真滴牛皮'
                        />
                    </Card>
                </Col>
            ) 
            ));
        imgList[1] = img.map( data => data.map( (item, index) => 
              (
                <Card
                    style={{marginBottom:'20px'}}
                    cover={<img src={item} />}
                    key={index}
                >
                    <CardMeta
                        title={item}
                        description='那是真滴牛皮'
                    />
                </Card>
            ) 
            ));
        this.setState({
            imgList
        })
    }

    toggle = (value) =>{
        this.setState({
            rowFirst: value
        })
    }

    whenTrue = () => (
        <Row gutter={16}>
            {this.state.imgList[0]}
        </Row>
    )

    whenFalse = () => (
        <Row gutter={16}>
            <Col md={8}>
                {this.state.imgList[1][0]}
            </Col>
            <Col md={8}>
                {this.state.imgList[1][1]}
            </Col>
            <Col md={8}>
                {this.state.imgList[1][2]}                    
            </Col>
        </Row>
    )

    render() {
        return (
            <div className='card'>
                <Switch checked={this.state.rowFirst} onChange={this.toggle} />
                {this.state.rowFirst ? this.whenTrue() : this.whenFalse()}
            </div>
        );
    }
}

export default Gallery;