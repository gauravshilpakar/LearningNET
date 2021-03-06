import React, { useContext } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import ActivityStore from '../../../app/stores/activityStore'
import { observer } from 'mobx-react-lite'

const ActivityDetails = () => {
    const activityStore = useContext(ActivityStore)
    const { selectedActivity, openEditForm, cancelSelectedActivity } = activityStore
    return (
        < Card fluid sticky="true" >
            <Image src={`/assets/categoryImages/${selectedActivity.category}.jpg`} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{selectedActivity.title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{selectedActivity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {selectedActivity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={2}>
                    <Button basic color='blue' content='Edit' onClick={() => openEditForm(selectedActivity.id)} />
                    <Button basic color='grey' content='Cancel' onClick={() => cancelSelectedActivity()} />
                </Button.Group>
            </Card.Content>
        </ Card >
    )
}



export default observer(ActivityDetails)
