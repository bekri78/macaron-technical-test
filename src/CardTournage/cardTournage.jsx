import React from 'react'
import { Card } from 'antd';
export default function CardTournage(props) {
    const { Meta } = Card;
    return (
        <div>
              <Card
    hoverable
    style={{ width: 240, margin:'10px' }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title= {props.nom_realisateur} description="www.instagram.com" />
  </Card>
        </div>
    )
}
