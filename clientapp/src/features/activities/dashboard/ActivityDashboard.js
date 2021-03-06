import React, { useContext } from 'react'
import { Grid } from 'semantic-ui-react'
import { ActivityForm } from '../form/ActivityForm'
import { observer } from 'mobx-react-lite'
import ActivityList from './ActivityList'
import ActivityStore from '../../../app/stores/activityStore'
import ActivityDetails from '../details/ActivityDetails'

const ActivityDashboard = () => {

    const activityStore = useContext(ActivityStore)
    const { editMode, selectedActivity } = activityStore
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedActivity && !editMode && <ActivityDetails />}
                {editMode &&
                    <ActivityForm
                        key={selectedActivity ? selectedActivity.id : 0}
                    />}
            </Grid.Column>
        </Grid>
    )
}

export default observer(ActivityDashboard);
