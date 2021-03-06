import React, { useContext } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react'
import ActivityStore from '../../app/stores/activityStore'
import { observer } from 'mobx-react-lite'

const NavBar = () => {
    const activityStore = useContext(ActivityStore)
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header><img src="/assets/logo.png" alt='logo' style={{ marginRight: '20px' }} />Friends</Menu.Item>
                <Menu.Item name='activties' />
                <Menu.Item>
                    <Button positive content="Create Activity" onClick={() => activityStore.openCreateForm()} />
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default observer(NavBar)