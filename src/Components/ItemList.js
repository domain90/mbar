import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

import donut from '../images/donut.jpg'

class ItemList extends React.Component {
    render() {
        return(
            <div className="ui three column doubling stackable grid">
                <div className="ui column">
                    <Card>
                        <Image src={donut} wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>Donut 1</Card.Header>
                        <Card.Meta>Joined in 2016</Card.Meta>
                        <Card.Description>
                            Daniel is a comedian living in Nashville.
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <a href="#">
                            <Icon name='plus circle' />
                            Agregar
                        </a>
                        </Card.Content>
                    </Card>
                </div>
                <div className="ui column">
                    <Card>
                        <Image src={donut} wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>Donut 1</Card.Header>
                        <Card.Meta>Joined in 2016</Card.Meta>
                        <Card.Description>
                            Daniel is a comedian living in Nashville.
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <a href="#">
                            <Icon name='plus circle' />
                            Agregar
                        </a>
                        </Card.Content>
                    </Card>
                </div>
                <div className="ui column">
                    <Card>
                        <Image src={donut} wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>Donut 1</Card.Header>
                        <Card.Meta>Joined in 2016</Card.Meta>
                        <Card.Description>
                            Daniel is a comedian living in Nashville.
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <a href="#">
                            <Icon name='plus circle' />
                            Agregar
                        </a>
                        </Card.Content>
                    </Card>
                </div>
            </div>
        )
    }
}

export default ItemList