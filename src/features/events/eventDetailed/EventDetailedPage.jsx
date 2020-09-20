import React from 'react'
import { Grid } from 'semantic-ui-react'
import EventDetailedHeader from './EventDetailedHeader'
import EventDetailedChat from './EventDetailedChat'
import EventDetailedSidebar from './EventDetailedSidebar'
import EventDetailedInfo from './EventDetailedInfo'
import { useSelector } from 'react-redux'

export default function EventDetailedPage({match}) {
    const event = useSelector(state => state.event.events.find(e => e.id === match.params.id));
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventDetailedHeader />
                <EventDetailedInfo />
                <EventDetailedChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventDetailedSidebar />
            </Grid.Column>
        </Grid>
    )
}